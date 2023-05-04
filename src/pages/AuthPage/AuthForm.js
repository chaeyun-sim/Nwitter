import { useState } from "react";
import { Content, Input, Submit, Title } from "./Styles";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { validation } from "./validation";

const AuthForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [newAccount, setNewAccount] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputs({...inputs, [name]: value})
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let data;
    const auth = getAuth();
    try {
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      } else {
        data = await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      }
      console.log(data)
      if (data.user) navigate('/')
    } catch (error) {
      let text = validation(error)
      alert(text)
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
    <Title>Login</Title>
        <Content onSubmit={submitHandler}>
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={changeHandler}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder='Password'
            value={inputs.password}
            onChange={changeHandler}
            required
          />
          <Submit type="submit" value={newAccount ? "Create Account" : "Sign In"} />
        </Content>
        <span onClick={toggleAccount}>
          {newAccount ? "Sign In" : "Create Account"}
        </span>
        </>
  )
};

export default AuthForm;