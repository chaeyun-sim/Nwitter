import { Container } from 'components/CommonStyles';
import { firestore } from '../../firebase';
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { query } from 'firebase/database';
import Nweets from 'components/Nweets/Nweets';
import NweetFactory from './NweetFactory';

const Home = ({ userObj }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(
      collection(firestore, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setTweets(nweetArr);
    });
  }, []);

  return (
    <Container>
      <NweetFactory userObj={userObj} />
      <div>
        {tweets.map((tweet) => (
          <Nweets key={tweet.id} nweetObj={tweet} isOwner={tweet.creatorId === userObj.uid} />
        ))}
      </div>
    </Container>
  )
};

export default Home;