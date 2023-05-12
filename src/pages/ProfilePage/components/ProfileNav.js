import { TweetNav, TweetNavItem } from "../Styles";

const ProfileNav = ({ clicked, setClicked }) => {
  return (
    <TweetNav>
      <TweetNavItem
        borderBottom={
          clicked === "tweets"
            ? "4px solid rgb(29, 155, 240)"
            : "4px solid white"
        }
        onClick={() => setClicked("tweets")}
      >
        Tweets
      </TweetNavItem>
      <TweetNavItem
        borderBottom={
          clicked === "reply"
            ? "4px solid rgb(29, 155, 240)"
            : "4px solid white"
        }
        onClick={() => setClicked("reply")}
      >
        Replies
      </TweetNavItem>
      <TweetNavItem
        borderBottom={
          clicked === "media"
            ? "4px solid rgb(29, 155, 240)"
            : "4px solid white"
        }
        onClick={() => setClicked("media")}
      >
        Media
      </TweetNavItem>
      <TweetNavItem
        borderBottom={
          clicked === "like" ? "4px solid rgb(29, 155, 240)" : "4px solid white"
        }
        onClick={() => setClicked("like")}
      >
        Likes
      </TweetNavItem>
    </TweetNav>
  );
};

export default ProfileNav;
