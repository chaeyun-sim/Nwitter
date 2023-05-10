import { useState } from "react";
import { Content, Input, Submit, Title } from "./Styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { validation } from "./validation";
import logo from '../../assets/logo.png'

const AuthForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' })

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputs({...inputs, [name]: value})
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let data;
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      if (data.user) navigate('/home')
    } catch (error) {
      let text = validation(error)
      alert(text)
    }
  };

  return (
    <>
    <img src={logo} width="44px" style={{ marginBottom: '-10px'}} alt="logo" />
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
        <div style={{ marginBottom: '10px'}}>
          <span style={{ color: '#74b9f2', fontSize: '13px', cursor: 'pointer'}}>Forgot password?</span>
          <span style={{ color: '#74b9f2', fontSize: '13px'}}> ﹒ </span>
          <span style={{ color: '#74b9f2', fontSize: '13px', cursor: 'pointer'}}>Sign up for Nwitter</span>
        </div>
        </>
  )
};

export default AuthForm;