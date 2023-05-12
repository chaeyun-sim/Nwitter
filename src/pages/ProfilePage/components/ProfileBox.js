import { RxCalendar } from "react-icons/rx";
import { Cover, EditButton, Name, ProfileCircle } from "../Styles";
import ProfileNav from "./ProfileNav";
import { useNavigate } from "react-router-dom";

const ProfileBox = ({ displayName, userObj, clicked, setClicked }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "480px",
        borderBottom: "1px solid rgb(239, 243, 244",
        marginTop: "8px"
      }}
    >
      <Cover>
        <ProfileCircle />
        <EditButton onClick={() => navigate('/edit-profile')}>Set up profile</EditButton>
      </Cover>
      <div style={{ paddingLeft: "20px" }}>
        <Name>{displayName}</Name>
        <p
          style={{
            color: "rgb(83, 100, 113)",
            fontWeight: "400",
            fontSize: "15px",
            marginTop: "2px",
            marginBottom: "20px"
          }}
        >
          @{userObj.uid}
        </p>
        <div
          style={{
            color: "rgb(83, 100, 113)",
            fontSize: "15px",
            marginBottom: "14px"
          }}
        >
          <RxCalendar
            style={{
              marginRight: "4px",
              height: "1.25rem",
              marginBottom: "-4px"
            }}
          />
          <span>
            Joined {userObj?.metadata?.creationTime.split(" ")[2]}{" "}
            {userObj?.metadata?.creationTime.split(" ")[3]}
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: "20px",
          marginLeft: "19px",
          marginBottom: "30px"
        }}
      >
        <span
          style={{
            color: "rgb(83, 100, 113)",
            cursor: "pointer",
            fontWeight: "400",
            fontSize: "15px"
          }}
        >
          <span style={{ color: "rgb(15, 20, 25)" }}>1</span> Following
        </span>
        <span
          style={{
            color: "rgb(83, 100, 113)",
            cursor: "pointer",
            fontWeight: "400",
            fontSize: "15px"
          }}
        >
          <span style={{ color: "rgb(15, 20, 25)" }}>1</span> Followers
        </span>
      </div>
      <ProfileNav
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
};

export default ProfileBox;
