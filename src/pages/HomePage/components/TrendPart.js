import { FiSearch } from "react-icons/fi";
import { Content, Count, Follow, FollowSection, HashTag, Profile, SearchInput, Section, Title, Trend, TrendSpan } from "../Styles";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { avatars } from "../avatarData";
import { data } from "../trendData";

const TrendPart = () => {
  return (
    <Trend>
      <div style={{ marginBottom: "18px" }}>
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
          <Section key={el.title}>
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
        {avatars.map((el, index) => (
          <FollowSection key={index}>
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
  );
};

export default TrendPart;