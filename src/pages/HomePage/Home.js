import { BodyContainer } from "components/CommonStyles";
import { firestore } from "../../firebase";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { query } from "firebase/database";
import Nweets from "components/Nweets/Nweets";
import { Nweet } from "./Styles";
import NweetFactory from "./components/NweetFactory";
import LeftNavigation from "./components/LeftNavigation";
import TrendPart from "./components/TrendPart";

const Home = ({ userObj, tweets, setTweets }) => {
  useEffect(() => {
    const q = query(
      collection(firestore, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
      }));
      setTweets(nweetArr);
    });
  }, []);

  return (
    <>
      <BodyContainer>
        <LeftNavigation />
        <div style={{ width: "55%" }}>
          <h2 style={{ marginTop: "-55px", marginBottom: "30px" }}>Home</h2>
          <NweetFactory userObj={userObj} />
          <Nweet>
            {tweets.map((tweet, index) => (
              <Nweets
                key={tweet.id}
                nweetObj={tweet}
                isOwner={tweet.creatorId === userObj.uid}
                index={index}
                len={tweets.length}
                timeLine={true}
              />
            ))}
          </Nweet>
        </div>
        <TrendPart />
      </BodyContainer>
    </>
  );
};

export default Home;
