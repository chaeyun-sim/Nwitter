import { BodyContainer } from "components/CommonStyles";
import { firestore } from "../../firebase";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { query } from "firebase/database";
import Nweets from "components/Nweets/Nweets";
import NweetFactory from "./NweetFactory";
import {
  Nweet,
  Trend,
  SearchInput,
  Content,
  Title,
  Section,
  TrendSpan,
  HashTag,
  Count,
  Follow,
  FollowSection,
  Profile
} from "./Styles";
import { FiSearch } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { data } from "./trendData";
import { avatars } from "./avatarData";

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
        ...document.data()
      }));
      setTweets(nweetArr);
    });
  }, []);

  return (
    <>
      <BodyContainer>
        <div style={{ width: "55%" }}>
          <h2 style={{ marginTop: "-55px", marginBottom: "30px" }}>Home</h2>
          <NweetFactory userObj={userObj} />
          <Nweet>
            {tweets.map((tweet) => (
              <Nweets
                key={tweet.id}
                nweetObj={tweet}
                isOwner={tweet.creatorId === userObj.uid}
              />
            ))}
          </Nweet>
        </div>
        <Trend>
          <div style={{ marginBottom: "16.5px" }}>
            <label>
              <FiSearch
                style={{
                  color: "rgb(83, 100, 113)",
                  width: "32px",
                  height: "1.25em",
                  position: "absolute",
                  marginTop: "11px",
                  marginLeft: "12px"
                }}
              />
            </label>
            <SearchInput
              placeholder="Search Nwitter"
              type="text"
            />
          </div>
          <Content>
            <Title>Trends for you</Title>
            {data.map((el) => (
              <Section>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TrendSpan>Trending in South Korea</TrendSpan>
                  <HashTag>{el.title}</HashTag>
                  <Count>{el.count}</Count>
                </div>
                <HiOutlineDotsHorizontal style={{ cursor: "pointer" }} />
              </Section>
            ))}
          </Content>
          <Content>
            <Title>Who to follow</Title>
            {avatars.map((el) => (
              <FollowSection>
                <Profile url={el.image}></Profile>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "60%"
                  }}
                >
                  <HashTag>{el.name}</HashTag>
                  <Count>{el.id}</Count>
                </div>
                <Follow>Follow</Follow>
              </FollowSection>
            ))}
          </Content>
        </Trend>
      </BodyContainer>
    </>
  );
};

export default Home;
