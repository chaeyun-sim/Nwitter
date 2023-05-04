import styled from "styled-components";

export const NweetContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid rgb(239, 243, 244);
  padding: 1%;
`

export const Form = styled.form`
  width: 100%;    
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Input = styled.textarea`
  font-family: "TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
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
`

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
`

export const UploadDiv = styled.div`
  width: 100%;
  min-width: 36px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PictureButton = styled.button`
  border-radius: 100%;
  border: none;
  width: 40px;
  height: 35px;
  background: white;
`

export const Nweet = styled.div`
  width: 57%;
  height: 50%;
`

export const Trend = styled.div`
  background: blue;
  width: 40%;
  margin-left: 30px;
  margin-top: -60px;
`

export const SearchInput = styled.input`
  color: rgb(83, 100, 113);
  background: '#eff3f4;
  padding-left: 12px;
  width: 350px;
  height: 53px;
`