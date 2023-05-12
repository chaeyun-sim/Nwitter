import { BodyContainer } from "components/CommonStyles";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";
import LeftNavigation from "pages/HomePage/components/LeftNavigation";
import TrendPart from "pages/HomePage/components/TrendPart";
import React, { useEffect, useState } from "react";
import Nweets from "components/Nweets/Nweets";
import { Nweet } from "pages/HomePage/Styles";
import ProfileBox from "./components/ProfileBox";
import ProfileHeader from "./components/ProfileHeader";

const Profile = ({
  refreshUser,
  userObj,
  tweets,
  displayName,
  setDisplayName
}) => {
  const [clicked, setClicked] = useState("tweets");
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    setNweets(tweets);
  }, [tweets]);

  useEffect(() => {
    if (userObj.displayName === null) {
      setDisplayName(userObj.email.split("@")[0]);
    } else {
      setDisplayName(userObj?.displayName);
    }
  }, []);

  const getMyNweets = async () => {
    const q = query(
      collection(getFirestore(), "nweets"),
      where("creatorId", "==", userObj?.uid)
    );
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  return (
    <BodyContainer
      style={{
        display: "flex",
        justifyContent: "flex-start"
      }}
    >
      <LeftNavigation />
      <div style={{ width: "100%" }}>
        <ProfileHeader
          displayName={displayName}
          tweets={tweets}
        />
        <ProfileBox
          displayName={displayName}
          userObj={userObj}
          clicked={clicked}
          setClicked={setClicked}
        />
        {clicked === "tweets" && (
          <Nweet>
            {nweets.map((tweet, index) => {
              if (tweet.creatorId === userObj.uid) {
                return (
                  <Nweets
                    key={tweet.id}
                    nweetObj={tweet}
                    index={index}
                    len={nweets.length}
                    timeLine={false}
                  />
                );
              }
            })}
          </Nweet>
        )}
      </div>
      <TrendPart />
    </BodyContainer>
  );
};

export default Profile;
