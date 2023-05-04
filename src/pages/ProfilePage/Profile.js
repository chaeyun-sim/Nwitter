import { Container } from 'components/CommonStyles';
import { storage } from '../../firebase';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Button } from 'pages/AuthPage/Styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ refreshUser, userObj }) => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (userObj.displayName === null) {
      setDisplayName(userObj.email.split('@')[0])
    } else {
      setDisplayName(userObj?.displayName)
    }
  }, [])

  const getMyNweets = async () => {
    const q = query(
    collection(getFirestore(), "nweets"),
    where("creatorId", "==", userObj?.uid)
    );
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
  };

  useEffect(() => {
    getMyNweets();
  }, [])

  const clickHandler = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/login')
    }).catch((err) => {
      console.error(err)
    })
  }

  const changeHandler = (event) => {
    setDisplayName(event.target.value)
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (userObj.displayName !== displayName) {
      await updateProfile(userObj, { displayName: displayName})
    }
  }

  const fileChangeHandler = () => {
    console.log('file change handler!')
  }

  return (
    <Container style={{ justifyContent: 'flex-start', marginTop: '30px'}}>
      <h1>프로필</h1>
      <div>
        <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column'}}>
          <div>
            <label>프로필 이미지</label>
            <input type="file" onChange={fileChangeHandler} />
          </div>
          <div>
            <label>닉네임</label>
            <input type="text" placeholder="Display Name" value={displayName} onChange={changeHandler} />
          </div>
          <div>
            <label>이메일</label>
            <input type="email" placeholder="Email" defaultValue={userObj.email} readOnly />
          </div>
          <input type="submit" value="Update profile" />
        </form>
      </div>
      <div style={{ marginTop: '30px'}}>
        <Button onClick={clickHandler}>로그아웃</Button>
      </div>
    </Container>
  )
};

export default Profile;