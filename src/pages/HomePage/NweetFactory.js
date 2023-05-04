import { addDoc, collection } from "firebase/firestore";
import { firestore, storage } from "../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { NweetContainer, Form, Input, Tweet, UploadDiv, PictureButton } from "./Styles";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePicture } from 'react-icons/ai'
import { Link } from "react-router-dom";

const NweetFactory = ({ userObj }) => {
  const [tweet, setTweet] = useState('');
  const [attachment, setAttachment] = useState("");
  const imageRef = useRef();
  const fileInput = useRef();

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
      displayName: userObj?.displayName,
      attachmentUrl,
    }
    await addDoc(collection(firestore, "nweets"), nweet)
    setTweet("");
    setAttachment("")
  };

  console.log(userObj)

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

  const pictureHandler = () => {
    fileInput.current.click();
  };
  

  return (
    <NweetContainer>
      <Link to="/profile" style={{ textDecoration: 'none', marginLeft: '10px' }}>
        <CgProfile size={'40px'} color='black' />
      </Link>
      <Form onSubmit={submitHandler}>
        <Input type="text" value={tweet} onChange={changeHandler} placeholder="What's happening?" maxLength={120} />
        <div style={{ display: 'flex'}}>
          <UploadDiv>
            <PictureButton type="button" onClick={pictureHandler} hidden={attachment}><AiOutlinePicture style={{ color: 'rgb(29, 155, 240)', width: '20px', height: '20px', cursor: 'pointer'}} /></PictureButton>
            <input type="file" ref={fileInput} accept="image/*" onChange={fileChangeHandler} style={{ display: 'none'}} />
          </UploadDiv>
          <Tweet type="submit" disabled={!tweet} style={{ background: tweet ? 'rgb(29, 155, 240)'  : '#99cdf8'}}>Tweet</Tweet>
        </div>
        {attachment && (
          <div>
            <img ref={imageRef} src={attachment} alt="attachment" width="50px" height="50px" />
            <button onClick={clearHandler} style={{ background: 'none', border: 'none'}}>X</button>
          </div>
        )}
      </Form>
      </NweetContainer>
  )
};

export default NweetFactory;