import { Container } from 'components/CommonStyles';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from 'pages/AuthPage/Styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ userObj }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <Container style={{ justifyContent: 'flex-start', marginTop: '30px'}}>
      <h1>{userObj?.displayName} 님의 프로필</h1>
      <div style={{ marginTop: '30px'}}>
        <Button onClick={clickHandler}>로그아웃</Button>
      </div>
    </Container>
  )
};

export default Profile;