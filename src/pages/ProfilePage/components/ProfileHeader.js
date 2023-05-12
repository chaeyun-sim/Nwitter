import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Header } from "../Styles";

const ProfileHeader = ({ displayName, tweets }) => {
  const navigate = useNavigate();

  return (
    <Header
      onClick={() => navigate('/home')}
    >
      <HiOutlineArrowLeft size="20" style={{ marginTop: '-5px'}} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1
          style={{
            fontSize: "18px",
            fontWeight: "700",
            color: "rgb(15, 20, 25)",
            marginTop: "-15px",
            marginLeft: "10px"
          }}
        >
          {displayName}
        </h1>
        <span
          style={{
            color: "rgb(83, 100, 113)",
            fontSize: "13px",
            fontWeight: "400",
            marginTop: "-7px",
            marginLeft: "10px"
          }}
        >
          {tweets.length} Tweet
        </span>
      </div>
    </Header>
  );
};

export default ProfileHeader;