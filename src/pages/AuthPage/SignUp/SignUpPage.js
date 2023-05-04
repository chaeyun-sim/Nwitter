import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Content, Input, Submit, Title } from "../Styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validation } from "../validation";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputs({...inputs, [name]: value})
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let data;
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      if (data.user) navigate('/home')
    } catch (error) {
      let text = validation(error)
      alert(text)
    }
  };

  return (
    <>
      <Title>Log in to Nwitter</Title>
        <Content onSubmit={submitHandler}>
          <Input
            type="text"
            name="email"
            placeholder="Phone, email, or username"
            value={inputs.email}
            onChange={changeHandler}
            style={{ background: '#f5f8fa', border: 'none'}}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder='Password'
            value={inputs.password}
            onChange={changeHandler}
            style={{ background: '#f5f8fa', border: 'none'}}
            required
          />
          <Submit type="submit" value={"Log In"} />
        </Content>
    </>
  )
};

export default SignUpPage;