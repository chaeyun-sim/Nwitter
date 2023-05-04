import { addDoc, collection } from "firebase/firestore";
import { firestore, storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const NweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState('');
  const [attachment, setAttachment] = useState("");
  const imageRef = useRef();

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
    <form onSubmit={submitHandler}>
        <input type="text" value={tweet} onChange={changeHandler} placeholder='무슨 일이 일어나고 있나요?' maxLength={120} />
        <input type="file" accept="image/*" onChange={fileChangeHandler} />
        <input type="submit" value="Tweet" />
        {attachment && (
          <div>
            <img ref={imageRef} src={attachment} alt="attachment" width="50px" height="50px" />
            <button onClick={clearHandler}>Clear</button>
          </div>
        )}
      </form>
  )
};

export default NweetFactory;