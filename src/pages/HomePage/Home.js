import { Container } from 'components/CommonStyles';
import { firestore } from '../../firebase';
import { addDoc, collection, getDocs, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { query } from 'firebase/database';

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState('');
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

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(firestore, "nweets"), {
        text: tweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      });
      setTweet("");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const changeHandler = (event) => {
    const { value } = event.target;
    setTweet(value);
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input type="text" value={tweet} onChange={changeHandler} placeholder='무슨 일이 일어나고 있나요?' maxLength={120} />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <h4>{tweet.text}</h4>
          </div>
        ))}
      </div>
    </Container>
  )
};

export default Home;