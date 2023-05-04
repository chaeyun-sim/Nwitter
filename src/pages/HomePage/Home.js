import { Container } from 'components/CommonStyles';
import { firestore, storage } from '../../firebase';
import { addDoc, collection, onSnapshot, orderBy } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { query } from 'firebase/database';
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import Nweets from 'components/Nweets/Nweets';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Home = ({ userObj }) => {
  const navigate = useNavigate();
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  const [attachment, setAttachment] = useState("");
  const imageRef = useRef();

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
    let attachmentUrl = "";

    if (attachment !== "") {
      const attachmentRef = ref(storage, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(attachmentRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }
    const nweet = {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj?.uid,
      attachmentUrl,
    }
    await addDoc(collection(firestore, "nweets"), nweet)
    setTweet("");
    setAttachment("")
  };

  const changeHandler = (event) => {
    const { value } = event.target;
    setTweet(value);
  }

  const fileChangeHandler = (event) => {
    const { files } = event.target;

    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = (res) => {
      setAttachment(res.currentTarget.result)
    }
    reader.readAsDataURL(file);
  };

  const clearHandler = () => {
    setAttachment("")
    imageRef.current.value = null;
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <input type="text" value={tweet} onChange={changeHandler} placeholder='무슨 일이 일어나고 있나요?' maxLength={120} />
        <input type="file" accept="image/*" onChange={fileChangeHandler} />
        <input type="submit" value="Tweet" />
      </form>
      {attachment && (
        <div>
          <img ref={imageRef} src={attachment} alt="attachment" width="50px" height="50px" />
          <button onClick={clearHandler}>Clear</button>
        </div>
      )}
      <div>
        {tweets.map((tweet) => (
          <Nweets key={tweet.id} nweetObj={tweet} isOwner={tweet.creatorId === userObj.uid} />
        ))}
      </div>
    </Container>
  )
};

export default Home;