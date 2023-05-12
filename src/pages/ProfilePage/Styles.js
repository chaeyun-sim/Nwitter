import styled, { css } from "styled-components";

export const Cover = styled.div`
  background: rgb(207, 217, 222);
  width: 100%;
  height: 200px;
  margin-bottom: 85px;
`;

export const ProfileCircle = styled.div`
  border-radius: 100%;
  width: 145px;
  height: 145px;
  position: absolute;
  top: 15.5%;
  background-image: url("https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
  background-position: center;
  background-size: 100%;
  border: 4px solid white;
  margin-left: 13px;
`;

export const Name = styled.span`
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: rgb(15, 20, 25);
`;

export const EditButton = styled.button`
  width: 131px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  position: absolute;
  top: 24%;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 30px;
  background: #fff;
  margin-left: 42.5%;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  color: rgb(15, 20, 25);
  cursor: pointer;
`;

export const TweetNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 12px;
`;

export const TweetNavItem = styled.div`
  padding-bottom: 16px;
  color: rgb(15, 20, 25);
  border-bottom: ${(props) => props.borderBottom};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  width: 155.5px;
  text-align: center;
`;

export const Header = styled.div`
  margin-top: -55px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  cursor: pointer;
`