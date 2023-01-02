import styled from "styled-components";
import LeafImg from "../../../assets/mypage/leaf_image.png";
import PushImg from "../../../assets/mypage/push_image.png";

export const MypageSection = styled.div`
  background-color: #f7f7f8;
  display: flex;
  position: relative;
`;

export const MypageLeft = styled.div`
  //background-color: red;
  width: 40vw;
  height: 90vh;
  margin: -8px;
`;

export const MypageLeftImg = styled.div`
  background-image: url(${PushImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: 20vh;
`;

export const MypageRight = styled.div`
  //background-color: pink;
  width: 60vw;
  height: 100vh;
  margin: -8px;
  position: relative;
`;

export const MypageRightImg = styled.div`
  background-image: url(${LeafImg});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  width: 48vw;
  height: 100vh;
  float: right;
`;

export const MypageForm = styled.div`
  //background-color: brown;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  //align-items: center;
  position: absolute;
  top: 20vh;
`;

export const MypageFormTitle = styled.div`
  //background-color: green;
  color: black;
  font-size: 1.3vw;
  font-weight: 500;
  width: 10vw;
`;

export const MypageFormInput = styled.input`
  all: unset;
  border-bottom: 1px solid rgba(189, 189, 189, 1);
  width: 30vw;
  height: 4vh;
  margin-bottom: 3vh;
`;

export const MypageFormbutton = styled.button`
  all: unset;
  background-color: rgba(60, 177, 114, 1);
  width: 13vw;
  height: 5vh;
  color: white;
  cursor: pointer;
  text-align: center;
  margin-top: 6vw;
  margin-left: 26vw;
`;

export const MypageFooter = styled.div`
  //background-color: blue;
  width: 100vw;
  height: 10vh;
  position: absolute;
  margin-top: 85vh;
`;

export const MypageFooterText1 = styled.div`
  //background-color: white;
  width: 15vw;
  height: 3vh;
  margin: 0 auto;
  color: rgba(44, 44, 44, 1);
`;
export const MypageFooterText2 = styled.div`
  //background-color: white;
  width: 25vw;
  height: 3vh;
  margin: 0 auto;
  padding-top: 4vh;
  color: rgba(44, 44, 44, 1);
`;

export const MypageFooterSpan = styled.span`
  color: rgba(154, 199, 91, 1);
`;
