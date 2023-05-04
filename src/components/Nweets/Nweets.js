import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { Button } from './Styles'
import { firestore, storage } from '../../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

const Nweets = ({ nweetObj, isOwner }) => {
  const [edit, setEdit] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj?.text)

  const deleteHandler = async () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await deleteDoc(doc(firestore, "nweets", `${nweetObj.id}`));
      await deleteObject(ref(storage, nweetObj.attachmentUrl))
    } else {
      console.log('none')
    }
  }

  const updateHandler = () => {
    setEdit((prev) => !prev);
  };

  const changeHandler = (event) => {
    const { value } = event.target;
    setNewNweet(value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const ref = doc(firestore, "nweets", `${nweetObj.id}`);
    await updateDoc(ref, {
      text: newNweet,
    })
    .then((res) => setEdit(false))
    .catch((err) => console.error(err));
  };

  return (
    <div>
      {edit ? (
        <>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder='수정 중....' value={newNweet} onChange={changeHandler} required />
            <input type="submit" value="Update Nweet" />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </form>
        </>
      ) : (
        <div>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} width="50px" height="50px" alt="tweet" />}
          {isOwner &&  (
            <div style={{ marginTop: '-20px'}}>
              <Button color="crimson" onClick={deleteHandler}><MdDelete style={{ cursor: 'pointer'}} /></Button>
              <Button color="gray" onClick={updateHandler}><HiOutlinePencilAlt style={{ cursor: 'pointer'}}  /></Button>
            </div>)
          }
        </div>
      )}
    </div>
  )
};

export default Nweets;