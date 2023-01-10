import styled from "styled-components";

export const Wrap = styled.div`
  height: 8vh;
  line-height: 8vh;
  border-bottom: 0.1vh solid #e5e5e5;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
`;

export const Logo = styled.div`
  width: 25vw;
  height: 8vh;
  float: left;
  text-align: center;
  img {
    width: 3.8vw;
    margin-top: 1.2vh;
  }
`;

export const HeaderItem = styled.div`
  //background-color: yellow;
  margin-left: 3vw;
  cursor: pointer;
`;

export const HeaderItems = styled.div`
  //background-color: green;
  flex-direction: row;
  width: 48vw;
  float: left;
  display: flex;
  justify-content: center;
`;

export const LogOut = styled.div`
  //background-color: orange;
  margin-right: 1vw;
  font-size: 0.5vw;
  text-decoration: underline;
  cursor: pointer;
  color: inherit;
`;

export const RightComp = styled.div`
  // background-color: orange;
  display: flex;
  flex-direction: row;
  float: left;
  width: 25vw;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const AuthImg = styled.div`
  float: left;
  img {
    width: 3vw;
    margin-top: 0.65vw;
  }
  cursor: pointer;
`;
