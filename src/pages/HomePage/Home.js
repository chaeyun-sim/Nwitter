import { BodyContainer } from 'components/CommonStyles';
import { firestore } from '../../firebase';
import { collection, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { query } from 'firebase/database';
import Nweets from 'components/Nweets/Nweets';
import NweetFactory from './NweetFactory';
import { Nweet, Trend, SearchInput } from './Styles';

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
    <>
      <BodyContainer>
        <div style={{ width: '55%'}}>
          <h2 style={{ marginTop: '-55px', marginBottom: '30px'}}>Home</h2>
          <NweetFactory userObj={userObj} />
          <Nweet>
            {tweets.map((tweet) => (
              <Nweets key={tweet.id} nweetObj={tweet} isOwner={tweet.creatorId === userObj.uid} />
            ))} 
          </Nweet>
        </div>
        {/* <Trend>
          <div>
            <SearchInput placeholder='Search Nwitter' type="text" />
          </div>
          <div>
            <h2>Trends for you</h2>
            <div></div>
          </div>
        </Trend> */}
      </BodyContainer>
    </>
  )
};

export default Home;