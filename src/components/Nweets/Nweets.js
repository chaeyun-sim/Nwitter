import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Button, Profile, Container, Id, Image } from "./Styles";
import { firestore } from "../../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";

const Nweets = ({ nweetObj, isOwner, index, len }) => {
  const [edit, setEdit] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj?.text);

  const deleteHandler = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deleteDoc(doc(firestore, "nweets", `${nweetObj.id}`));
      await deleteObject(ref(getStorage(), nweetObj.attachmentUrl))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log("none");
    }
  };

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
      text: newNweet
    })
      .then((res) => setEdit(false))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {edit ? (
        <>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="수정 중...."
              value={newNweet}
              onChange={changeHandler}
              required
            />
            <input
              type="submit"
              value="Update Nweet"
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </form>
        </>
      ) : (
        <>
          <Container style={index !== len - 1 ? { borderBottom: "none" } : {}}>
            <div style={{ marginTop: "17px" }}>
              <Profile
                background={
                  "#" + Math.round(Math.random() * 0xffffee).toString(16)
                }
              ></Profile>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {nweetObj?.attachmentUrl ? (
                  <div style={{ display: "flex", alignItems: "center", width: '380px' }}>
                    <h4>{nweetObj?.displayName}</h4>
                    <Id>@{nweetObj?.creatorId}</Id>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", width: '393px' }}>
                    <h4>{nweetObj?.displayName}</h4>
                    <Id>@{nweetObj?.creatorId}</Id>
                  </div>
                )}
                {isOwner && (
                  <div style={{ display: "flex", justifyContent: "left" }}>
                    <Button
                      color="crimson"
                      onClick={deleteHandler}
                    >
                      <MdDelete style={{ cursor: "pointer" }} />
                    </Button>
                    <Button
                      color="gray"
                      onClick={updateHandler}
                    >
                      <HiOutlinePencilAlt style={{ cursor: "pointer" }} />
                    </Button>
                  </div>
                )}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "black",
                    marginBottom: "20px",
                    marginTop: "-13px"
                  }}
                >
                  {nweetObj.text}
                </span>
                {nweetObj?.attachmentUrl && (
                  <Image
                    image={nweetObj?.attachmentUrl}
                    style={{
                      height: "450px",
                      width: "450px",
                      marginBottom: "30px",
                      borderRadius: "12px",
                      marginTop: "-10px"
                    }}
                  ></Image>
                )}
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Nweets;
