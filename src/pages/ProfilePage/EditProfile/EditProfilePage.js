import { BodyContainer } from "components/CommonStyles";
import LeftNavigation from "pages/HomePage/components/LeftNavigation";
import TrendPart from "pages/HomePage/components/TrendPart";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Nweets/Styles";
import { Header } from "../Styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Input } from "./Style";
import { Tweet } from "pages/HomePage/Styles";

const EditProfile = ({ userObj, tweets, setDisplayName, displayName }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const changeHandler = (event) => {
    setDisplayName(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (userObj.displayName !== displayName) {
      await updateProfile(userObj, { displayName: displayName });
    }
  };

  const fileChangeHandler = () => {
    console.log("file change handler!");
  };

  return (
    <BodyContainer>
      <LeftNavigation />
      <div style={{ width: "100%", marginTop: "-10px" }}>
        <Header
          onClick={() => navigate("/home")}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px"
          }}
        >
          <HiOutlineArrowLeft
            size="20"
            style={{ marginTop: "-10px" }}
          />
          <h1
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "rgb(15, 20, 25)",
              marginLeft: "10px",
              marginTop: "6px"
            }}
          >
            Edit Profile
          </h1>
        </Header>
        <div style={{ paddingBottom: '80px', borderBottom: '1px solid rgb(207, 217, 222)'}}>
          <form
            onSubmit={submitHandler}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={changeHandler}
            />
            <Input
              type="email"
              placeholder="Email"
              // defaultValue={userObj.email}
              defaultValue={''}
              readOnly
            />
            <Tweet
              type="submit"
              style={{
                background: "rgb(29, 155, 240)",
                minHeight: "36px",
                width: "88px",
                height: "36px",
                marginLeft: '370px',
              }}
            >
              Save
            </Tweet>
          </form>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Tweet
            onClick={clickHandler}
            style={{
              background: "rgb(29, 155, 240)",
              minHeight: "36px",
              width: "25%",
              height: "36px",
            }}
          >
            Log out
          </Tweet>
        </div>
      </div>
      <TrendPart />
    </BodyContainer>
  );
};

export default EditProfile;
