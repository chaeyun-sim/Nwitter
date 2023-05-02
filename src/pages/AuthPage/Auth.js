import React, { useState } from 'react';
import { Content, Submit, Title, Input, Button, Buttons, DividerText } from './Styles'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { validation } from './validation';
import { Container } from 'components/CommonStyles';

const Auth = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
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

  const socialClickHandler = async (event) => {
    const { name } = event.target;
    let provider;

    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }

    const auth = getAuth();
    if (provider) {
      await signInWithPopup(auth, provider);
      navigate('/')
    }
  };

  return (
    <Container>
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
      <DividerText>또는</DividerText>
      <Buttons>
        <Button name="google" onClick={socialClickHandler} style={{ marginBottom: '25px'}}><FcGoogle style={{ marginBottom: '-2.5px'}} /> Continue with Google</Button>
        <Button name="github" onClick={socialClickHandler}><FaGithub style={{ marginBottom: '-2.5px'}}  /> Continue with Github</Button>
      </Buttons>
    </Container>
  )
};

export default Auth;