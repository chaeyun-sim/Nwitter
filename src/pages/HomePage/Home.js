import { Container } from 'components/CommonStyles';
import { firestore } from '../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const getNweets = async () => {
    const Snap = await getDocs(collection(firestore, "nweets"));
    Snap.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      const data = {
        ...doc.data(),
        id: doc.id
      }
      setTweets(prev => [data, ...prev]);
    });
  };

  useEffect(() => {
    getNweets();
    console.log(tweets)
  }, []);



  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const doc = await addDoc(collection(firestore, "nweets"), {
        tweet,
        createdAt: Date.now(),
      })
      console.log(doc)
    } catch (err) {
      console.error(err)
    }

    setTweet('')
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
            <h4>{tweet.tweet}</h4>
          </div>
        ))}
      </div>
    </Container>
  )
};

export default Home;