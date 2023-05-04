import React from 'react';
import { Button, Buttons, DividerText } from './Styles'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Container } from 'components/CommonStyles';
import AuthForm from './AuthForm';

const Auth = () => {
  const navigate = useNavigate();

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
      navigate('/home')
    }
  };

  return (
    <Container style={{ marginTop: '-60px'}}>
      <AuthForm />
      <DividerText>또는</DividerText>
      <Buttons>
        <Button name="google" onClick={socialClickHandler} style={{ marginBottom: '25px'}}><FcGoogle style={{ marginBottom: '-2.5px'}} /> Continue with Google</Button>
        <Button name="github" onClick={socialClickHandler}><FaGithub style={{ marginBottom: '-2.5px'}}  /> Continue with Github</Button>
      </Buttons>
    </Container>
  )
};

export default Auth;