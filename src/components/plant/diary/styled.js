import styled from "styled-components";
import Usericon from "../../../assets/diary/유저 정보란.png";
import Sideplant from "../../../assets/diary/마이페이지_사이드바 식물 icon_green.png";
import Sideplantcl from "../../../assets/diary/마이페이지_사이드바 식물 icon_white.png";
import Img from "../../../assets/diary/일지 작성 페이지_image.png";
//import Write from "./img/일지 입력란.png"

/* 사이드바 */
export const Page = styled.div`
    width: 100vw;
    height: 127vh; // 임시 설정
    background: #f0f0f0;
`

export const Sidebar = styled.div`
    position: absolute;
    width: 20.8vw;
    height: 127vh;
    left: 0vw;
    top: 8vh;
    background-color: #ffffff;
`

/* 유저 이모티콘 */
export const Userpic = styled.div`
    background-image: url(${Usericon});
    position: absolute;
    width: 2.57vw;
    height: 4.22vh;
    left: 2.85vw;
    top: 4vh; 

    background-repeat: no-repeat;
    background-size: contain;
`

/* (닉네임) 님 */
export const Usernick = styled.div`
    position: absolute;
    width: 10.28vw;
    height: 3vh;
    left: 8.125vw;
    top: 4.778vh; 

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.67vh;

    color: #858585;
`
/* 식물 1, 식물 2 리스트 */
export const Sidelist = styled.div`
    position: absolute;
    width: 20.8vw;
    height: 77.333vh;
    left: 0vw;
    top: 14.667vh;
    //background-color: pink;
`

export const Sideplantpic = styled.div`
    background-image: url(${Sideplant});
    width: 1.875vw;
    height: 3.6vh;
    margin-left: 3.96vw;
    margin-top: 1.26vh;
    display: inline-block;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Sideplantname = styled.div`
    position: absolute;
    width: 6.04vw;
    height: 3vh;
    left: 6.736vw;
    top: 1.59vh;
    display: inline-block;
    font-family: 'Poppins';
    
    font-style: normal;
    font-weight: 700;
    font-size: 2vh;
    line-height: 3vh;
    color: #858585;
`

export const Listcompo = styled.div`
    width: 19.61vw;
    height: 5.99vh;
    margin-bottom: 2.3vh;
    //background-color: aqua;
`

export const Sideplantpicclicked = styled.div`
    background-image: url(${Sideplantcl});
    width: 1.875vw;
    height: 3.6vh;
    margin-left: 3.96vw;
    margin-top: 1.26vh;
    display: inline-block;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Sideplantnameclicked = styled.div`
    position: absolute;
    width: 6.04vw;
    height: 3vh;
    left: 6.736vw;
    top: 10vh;
    display: inline-block;
    font-family: 'Poppins';
    
    font-style: normal;
    font-weight: 400;
    font-size: 2vh;
    line-height: 3vh;
    color: #ffffff;
`
export const Listcompoclicked = styled.div`
    width: 19.61vw;
    height: 5.99vh;
    margin-bottom: 2.3vh;
    background: linear-gradient(178.18deg, #168F5C -13.56%, #83F38E 158.3%);
    border-radius: 0vh 2.99vh 2.99vh 0vh;
`

/* 식물 이름, 디데이 */
export const Plantname = styled.div`
    position:absolute;
    width: 179.9px;
    height: 47.79px;
    left: 24.375vw;
    top: 10.889vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;

    color: #858585;
`

export const Plantdday = styled.div`
    position: absolute;
    width: 10.97vw;
    height: 1.445vh;
    left: 24.51vw;
    top: 16.2222vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.333vh;
    line-height: 2vh;

    color: #858585;

`

/* 흰 배경 */ 
export const Back = styled.div`
    position: absolute;
    width: 71.458vw;
    height: 102.22vh;
    left: 24.34vw;
    top: 20.444vh;

    background: #FFFFFF;
`

/* 저장하기 버튼 */
export const Savebtn = styled.button`
    padding: 1.3vh 1.25vw;

    position: absolute;
    width: 9.44vw;
    height: 4.666vh;
    left: 56.805vw;
    top: 7.11vh;
    text-align: center;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 0.972vw;
    line-height: 2vh;

    text-align: center;
    letter-spacing: 0.3px;

    border: 0;
    color:#ffffff;
    background: #3CB172;
`

/* 공유하기 버튼 */
export const Sharebtn = styled.button`
    padding: 1.3vh 1.25vw;

    position: absolute;
    width: 9.44vw;
    height: 4.666vh;
    left: 44.583vw;
    top: 7.11vh;
    text-align: center;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 0.972vw;
    line-height: 2vh;

    text-align: center;
    letter-spacing: 0.3px;

    border: 0;
    color: #ffffff;
    background: #3CB172;
`

/* 수정하기 버튼 */
export const Editbtn = styled.button`
    padding: 1.3vh 1.25vw;

    position: absolute;
    width: 9.44vw;
    height: 4.666vh;
    left: 56.805vw;
    top: 7.11vh;
    text-align: center;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 0.972vw;
    line-height: 2vh;

    text-align: center;
    letter-spacing: 0.3px;

    border: 1px solid #3CB172;
    color:#3CB172;
    background: #ffffff;
`

/* 일지 제목을 입력하세요 */
export const Logtitle = styled.input`
    position: absolute;
    width: 24.36vw; //22.36
    height: 4.822vh;
    left: 3.268vw;
    top: 5.063vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 2.22vw;
    line-height: 4.44vh;
    letter-spacing: 0.1px;

    outline: 0;
    border: 0;
    ::placeholder{
        color: #373F41;
    }
`

/* 생육 정보 */ 
export const Growinfo = styled.div`
    position: absolute;
    width: 8.22vw;  //7.22
    height: 3.85vh;
    left: 2.916vw;
    top: 15.55vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.8vw;
    line-height: 3.55vh;

    letter-spacing: 0.2px;

    color: #373F41;
`

/* 급수 여부 / 급수량 */
export const Watertxt = styled.div`
    position: absolute;
    width: 13.88vw;
    height: 2.41vh;
    left: 3.611vw;
    top: 21.3366vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 0.972vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Waterinput = styled.input`
    position: absolute;
    width: 18.33vw;
    height: 6.75vh;
    left: 3.61vw;
    top: 24.832vh;

    background: #ffffff;
    border: 1px solid #D9D9D9;
`

/* 생육 보조제 투약 여부 */
export const Drugtxt = styled.div`
    position: absolute;
    width: 13.88vw;
    height: 2.41vh;
    left: 26.25vw;
    top: 21.3366vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 0.972vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Druginput = styled.input`
    position: absolute;
    width: 18.33vw;
    height: 6.75vh;
    left: 25.972vw;
    top: 24.832vh;

    background: #F4F5F4;
    border: 0;
`

/* 새로운 생장 변화 */
export const Newtxt = styled.div`
    position: absolute;
    width: 13.88vw;
    height: 2.41vh;
    left: 48.26vw;
    top: 21.3366vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 0.972vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Newinput = styled.input`
    position: absolute;
    width: 18.33vw;
    height: 6.75vh;
    left: 48.263vw;
    top: 24.832vh;

    background: #3CB18E;
    opacity: 0.1;
    border: 1px solid #D9D9D9;
`

/* 오늘의 일지 */ 
export const Todaylog = styled.div`
    position: absolute;
    width: 10.22vw;  //7.22
    height: 3.85vh;
    left: 2.916vw;
    top: 39.05vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.8vw;
    line-height: 3.55vh;

    letter-spacing: 0.2px;

    color: #373F41;
`

/* 키운지 nnn일차 */
export const Dday = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 22.411vw;
    left: 3.2638vw;
    top: 44.842vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 0.972vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

/* 사진 첨부 */
export const Imageadd = styled.div`
    background-image: url(${Img});
    //background-color: pink;
    position: absolute;
    width: 37.083vw;
    height: 45.204vh;
    left: 2.569vw;
    top: 49.22vh;

    background-repeat: no-repeat;
    background-size: contain;
`

/* 일지 내용 입력 */

/* export const Logwrite = styled.input`
    background-image: url(${Write});
    position: absolute;
    width: 27.083vw;
    height: 50.778vh;
    left: 41.18vw;
    top: 49.22vh;

    font-size: 3vh;
    
    border: 0;
`*/
