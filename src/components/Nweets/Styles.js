import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: #fff;
  font-size: 17px;
  color : ${(props) => props.color}
`

export const Profile = styled.div`
  background: ${(props) => props.background};
  width: 45px;
  height: 45px;
  border-radius: 100%;
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 20px;
  padding-left: 3%;
  border: 1px solid rgb(239, 243, 244);
  width: 97%;

  &:nth-last-child() {
    background: red;
  }
`

export const Id = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 90px;
  font-size: 13px;
  color: #a8b0b8;
  margin-left: 10px;
`

export const Image = styled.div`
  background-image: url(${(props) => props.image})
`