import styled from "styled-components";

export const Title = styled.h1`
  font-size: 37px;
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
  width: 100%;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Input = styled.input`
  width: 23%;
  min-width: 350px;
  height: 40px;
  border-radius: 20px;
  border: 1.5px solid lightgray;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 17px;
  margin-bottom: 25px;

  &::placeholder {
    font-size: 17px;
  }
`

export const Submit = styled.input`
  width: 24%;
  min-width: 350px;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 17px;
  margin-bottom: 25px;
  background: #00a1ee;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`

export const DividerText = styled.span`
  font-size: 18px;
  margin-bottom: 30px;
  margin-top: 30px;
  color: gray;
  background: white;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 10;
`

export const Button = styled.button`
  width: 20%;
  min-width: 350px;
  height: 40px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 17px;
  border-radius: 20px;
  background: #fff;
  border: 1.5px solid lightgray;
  cursor: pointer;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
  text-align: center;
  width: 100%;
`