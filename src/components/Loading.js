import { Container } from "./CommonStyles";
import logo from "../assets/logo.png";

const Loading = () => {
  return (
    <Container>
      <img
        src={logo}
        alt="logo"
        style={{ width: "60px" }}
      />
    </Container>
  );
};

export default Loading;
