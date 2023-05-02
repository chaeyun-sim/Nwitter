import { Container } from 'components/CommonStyles';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
    <Container>
      <button onClick={clickHandler}>LogOut</button>
    </Container>
  )
};

export default Profile;