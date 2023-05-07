import styled from "styled-components";

export const NweetContainer = styled.div`
  width: 98%;
  height: 130px;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid rgb(239, 243, 244);
  padding: 1%;
  padding-top: 2%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Input = styled.textarea`
  font-family: "TwitterChirp", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif;
  width: 98.5%;
  height: 57%;
  border: none;
  font-size: 20px;
  line-height: 20px;
  color: rgb(15, 20, 25);
  font-weight: 400;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 1%;
  resize: none;
  margin-bottom: 10px;
  outline: none;
  border-bottom: 1px solid rgb(239, 243, 244);
`;

export const Tweet = styled.button`
  width: 20%;
  height: 20%;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  margin-left: 12px;
  min-width: 36px;
  min-height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  align-self: right;
  cursor: pointer;
`;

export const UploadDiv = styled.div`
  width: 100%;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PictureButton = styled.button`
  border-radius: 100%;
  border: none;
  width: 40px;
  height: 35px;
  background: white;
`;

export const Nweet = styled.div`
  width: 100%;
  height: 50%;
`;

export const Trend = styled.div`
  width: 40%;
  margin-left: 30px;
  margin-top: -60px;
`;

export const SearchInput = styled.input`
  color: rgb(15, 20, 25);
  background-color: rgb(239, 243, 244);
  width: 330px;
  height: 18px;
  padding: 12px;
  font-size: 15px;
  border-radius: 30px;
  padding-left: 55px;
  border: none;
`;

export const Content = styled.div`
  background-color: rgb(247, 249, 249);
  border: none;
  margin-bottom: 16px;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Title = styled.h2`
  padding-top: 12px;
  font-weight: bold;
  line-height: 24px;
  font-size: 20px;
  color: rgb(15, 20, 25);
`

export const Section = styled.div`
  cursor: pointer;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
`

export const FollowSection = styled.div`
  cursor: pointer;
  padding-bottom: 12px;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  align-items: center;
`

export const TrendSpan = styled.span`
  color: rgb(83, 100, 113);
  line-height: 16px;
  font-size: 13px;
  font-weight: 400; 
  width: 100%;
`

export const HashTag = styled.span`
  color: rgb(15, 20, 25);
  margin-top: 2px;
  font-weight: 700;
  font-size: 15px;
`

export const Count = styled.span`
  margin-top: 4px;
  color: rgb(83, 100, 113);
  font-size: 13px;
  font-weight: 400;
`

export const Follow = styled.button`
  background: rgb(15, 20, 25);
  min-height: 42px;
  width: 100px;
  border-radius: 20px;
  min-width: 32px;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  border: none;
`

export const Profile = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin-right: 3%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80px;
  object-fit: contain;
`