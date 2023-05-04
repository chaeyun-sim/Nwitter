import { Container } from "components/CommonStyles";
import { Button } from "pages/AuthPage/Styles";
import { useNavigate } from "react-router-dom";

const NotFoundPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    if (isLoggedIn) {
      navigate('/home')
    } else {
      navigate('/login')
    }
  };

  return (
    <Container style={{ marginTop: '-140px'}}>
      <h1 style={{ fontSize: '140px', marginBottom: '-20px'}}>404</h1>
      <h2>OOPS! PAGE NOT FOUND</h2>
      <span style={{ textAlign: 'center', marginTop: '10px', marginBottom: '40px', lineHeight: '23px'}}>찾으려는 페이지의 이름이 변경되었거나<br/>일시적으로 사용할 수 없는 페이지일 수 있습니다.</span>
      <Button style={{ background: 'blue', color: 'white'}} onClick={() => clickHandler()}>GO TO HOMEPAGE</Button>
    </Container>
  )
};

export default NotFoundPage;