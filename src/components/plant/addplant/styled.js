import styled from "styled-components";
import Myplant from "../../../assets/add_plant/my_plant.png";
import Image from "../../../assets/add_plant/Image.png";
import Xp from "../../../assets/add_plant/사진 추가.png";
import Watercan from "../../../assets/add_plant/watering-can1.png";
import Nutri from "../../../assets/add_plant/drugs 1.png";
import Repot from "../../../assets/add_plant/free-icon-flower-pot-867372 1.png";
import Firstday from "../../../assets/add_plant/free-icon-deadline-7184737 1.png";
import Click from "../../../assets/add_plant/pin 1.png";

/* 임시 페이지 크기 */
export const PageBack = styled.div`
    width: 1440px;
    height: 1650px;
    background: #F4F5F4;
`


/* 윗 부분(제목 및 수정, 등록 버튼) */
export const PageTitle = styled.div`
    position: absolute;
    width: 40.68vw;
    height: 6.22vh;
    left: 5.5555vw;
    top: 16.22vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 4.88vh;
    line-height: 5.55vh;
    letter-spacing: -2px; //그램에서는 이게 더 자연스러운데 다른 컴은 어쩔지 모르겠다,,,

    color: #373F41;
`
/* 저장 버튼 */
export const Savebtn = styled.button`
    position: absolute;
    width: 10.347vw;
    height: 4.667vh;
    left: 70vw;
    top: 16.22vh;
    
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 0.9vw;

    color: #FFFFFF;
    background: #3CB172;

    border: 0;
    outline: 0;
`
/* 수정 버튼 */ 
export const Editbtn = styled.button`
    position: absolute;
    width: 10.347vw;
    height: 4.667vh;
    left: 82vw;
    top: 16.22vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 0.9vw;

    color: #3CB172;

    border: 2px solid #3CB172;
    outline: 0;
`

/* 정보 등록 흰칸*/
export const Infoback = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 88.8889vw;
    height: 150.33vh; 
    left: 5.138vw;
    top: 27.4vh;

    background: #FFFFFF;

    border: 1px solid #E2E5E6;
    border-radius: 0.55vw;
`

/* 식물 종 */ 
export const SpecTxt = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 2.22vh;
    left: 10.555vw;
    top: 7.77vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 1.38vw;
    line-height: 2.22vh;

    //letter-spacing: 0.2px;

    color: #737B7D;
`

export const SpecInput = styled.input`
    position: absolute;
    width: 24.72vw;
    height: 6.22vh;
    left: 10.138vw;
    top: 11.22vh; 

    border: 1px solid #E9E9E9;
`

/* 식물 그림 */ 
export const Plantpicback = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 38.9vh;
    left: 10.555vw;
    top: 22.778vh;

    border-radius: 50%;
    background-color: rgba(228, 228, 228, 0.8);
`

export const Plantpic = styled.div`
    background-image: url(${Myplant});
    position: absolute;
    left: 2.78vw;
    top: 4.44vh;
    width: 18.75vw;
    height: 30vh;

    background-repeat: no-repeat;

    background-size: contain;
`

/* 사진 표시 */ 
export const Imageback = styled.button`
    position: absolute;
    width: 5.55vw;
    height: 8.888vh;
    left: 15.694vw;
    top: 62.88vh;

    border-radius: 50%;
    background-color: rgba(228, 228, 228, 0.8);

    border: 0;
    outline: 0;
`

export const Imagepic = styled.div`
    background-image: url(${Image});
    position: absolute;
    width: 2.778vw;
    height: 4.08vh;
    left: 1.388vw;
    top: 2.3vh;

    background-repeat: no-repeat;

    background-size: contain;
`

/* X 표시 */
export const Xback = styled.button`
    position: absolute;
    width: 5.55vw;
    height: 8.888vh;
    left: 24.861vw;
    top: 62.88vh;

    background-repeat: no-repeat;

    border-radius: 50%;
    background-color: rgba(228, 228, 228, 0.8);

    border: 0;
    outline: 0;
`

export const Xpic = styled.div`
    background-image: url(${Xp});
    position: absolute;
    width: 4.166vw;
    height: 6.67vh;
    left: 0.8vw;
    top: 1.3vh;

    background-size: contain;
`

/* 기본 정보 및 생육 환경 */
export const BasicInfo = styled.div`
    position: absolute;
    width: 23.083vw; //그램 화면 비율이 이상한 것 같기도,,,
    height: 3.55vh;
    left: 44.305vw;
    top: 12.55vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.805vw;
    line-height: 3.55vh;

    letter-spacing: 0.2px;

    color: #373F41;
`

/* 식물 이름 */
export const Plantname = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 2.22vh;
    left: 44.305vw;
    top: 22.7778vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 2vh;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const PlantnameInput = styled.input`
    position: absolute;
    width: 35.55vw;
    height: 6.22vh;
    left: 44.305vw;
    top: 25.889vh;

    border: 1px solid #E9E9E9;
`

/* 생육 온도 */
export const Growtmp = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 2.22vh;
    left: 44.305vw;
    top: 36vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 2vh;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Growtmpinput = styled.input`
    position: absolute;
    width: 35.55vw;
    height: 6.22vh;
    left: 44.305vw;
    top: 38.88vh;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #737B7D;
`

/* 일조량 */
export const Sunshine = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 2.22vh;
    left: 44.305vw;
    top: 49.11vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 2vh;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Sunshineinput = styled.input`
    position: absolute;
    width: 35.55vw;
    height: 6.22vh;
    left: 44.305vw;
    top: 52.111vh;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #737B7D;
`

/* 1회 급수량 */
export const Water = styled.div`
    position: absolute;
    width: 24.72vw;
    height: 2.22vh;
    left: 44.305vw;
    top: 62.22vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 2vh;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Waterinput = styled.input`
    position: absolute;
    width: 35.55vw;
    height: 6.22vh;
    left: 44.305vw;
    top: 65.44vh;

    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #737B7D;
`

/* 추가 세부 정보 입력 */ 
export const Detail = styled.div`
    position: absolute;
    width: 16.93vw;
    height: 3.55vh;
    left: 11.875vw;
    top: 82.555vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.805vw;
    line-height: 3.55vh;

    letter-spacing: 0.2px;

    color: #373F41;
`

/* Todos and Anniversary */ 
export const TodoandA = styled.div`
    position: absolute;
    width: 17.778vw;
    height: 2.22vh;
    left: 17.083vw;
    top: 88.11vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

/* 클릭 후 입력하세요 */
export const Clickandinput = styled.div`
    position: absolute;
    width: 10.416vw;
    height: 2.22vh;
    left: 48.541vw;
    top: 88.22vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 0.97vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

/* 마지막 급수 날짜 */
export const WaterCB = styled.input`
    appearance: none;
    border: 1.5px solid gainsboro;
  
    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 12.569vw;
    top: 93.778vh;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #3CB172;
  }
`

export const Watericon = styled.div`
    background-image: url(${Watercan});
    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 18.19vw;
    top: 93.778vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Watertxt = styled.div`
    position: absolute;
    width: 18.541vw;
    height: 2.22vh;
    left: 24.027vw;
    top: 95vh; //94.66

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.388vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Waterinputunder = styled.input`
    position: absolute;
    width: 30vw;
    height: 4.44vh;
    left: 48.472vw;
    top: 94vh;

    padding-left: 1.25vw;

    outline: 0;
    border: 0;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 1.388vw;
    line-height: 2vh;

    letter-spacing: 0.2px;

    background-color: #ECF8F4;
    color: #C3CBCD;
`

/* 영양제 투여 주기 */
export const NutriCB = styled.input`
    appearance: none;
    border: 1.5px solid gainsboro;
  
    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 12.569vw;
    top: 101.3333vh;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #3CB172;
  }
`

export const Nutriicon = styled.div`
    background-image: url(${Nutri});

    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 18.19vw;
    top: 101.22vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Nutritxt = styled.div`
    position: absolute;
    width: 18.541vw;
    height: 2.22vh;
    left: 24.027vw;
    top: 102.333vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.388vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Nutriinputunder = styled.input`
    position: absolute;
    width: 30vw;
    height: 4.44vh;
    left: 48.472vw;
    top: 101.5vh;

    padding-left: 1.25vw;

    outline: 0;
    border: 0;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 1.388vw;
    line-height: 2vh;

    letter-spacing: 0.2px;

    background-color: #ECF8F4;
    color: #C3CBCD;
`

/* 분갈이 주기 */
export const RepotCB = styled.input`
    appearance: none;
    border: 1.5px solid gainsboro;
  
    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 12.569vw;
    top: 108.88vh;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #3CB172;
  }
`

export const Repoticon = styled.div`
    background-image: url(${Repot});

    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 18.19vw;
    top: 109.333vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Repottxt = styled.div`
    position: absolute;
    width: 18.541vw;
    height: 2.22vh;
    left: 24.027vw;
    top: 110vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.388vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Repotinputunder = styled.input`
    position: absolute;
    width: 30vw;
    height: 4.44vh;
    left: 48.472vw;
    top: 109vh;

    padding-left: 1.25vw;

    outline: 0;
    border: 0;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 1.388vw;
    line-height: 2vh;

    letter-spacing: 0.2px;

    background-color: #ECF8F4;
    color: #C3CBCD;
`

/* 식물과 처음 함께 한*/
export const FirstdayCB = styled.input`
    appearance: none;
    border: 1.5px solid gainsboro;
  
    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 12.569vw;
    top: 116.444vh;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #3CB172;
  }
`

export const Firstdayicon = styled.div`
    background-image: url(${Firstday});

    position: absolute;
    width: 2.48vw;
    height: 4vh;
    left: 18.19vw;
    top: 117vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Firstdaytxt = styled.div`
    position: absolute;
    width: 18.541vw;
    height: 2.22vh;
    left: 24.027vw;
    top: 117.77vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 600;
    font-size: 1.388vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;

    color: #737B7D;
`

export const Firstdayinputunder = styled.input`
    position: absolute;
    width: 30vw;
    height: 4.44vh;
    left: 48.472vw;
    top: 116vh;

    padding-left: 1.25vw;

    outline: 0;
    border: 0;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 1.388vw;
    line-height: 2vh;

    letter-spacing: 0.2px;

    background-color: #ECF8F4;
    color: #C3CBCD;
`

/* 클릭하여 항목을 추가 */
export const ClickCB = styled.input`
    appearance: none;
    border: 1.5px solid gainsboro;
  
    position: absolute;
    width: 2.5vw;
    height: 4vh;
    left: 12.569vw;
    top: 124.22vh;

    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #3CB172;
  }
`

export const Clickicon = styled.div`
    background-image: url(${Click});

    position: absolute;
    width: 2.48vw;
    height: 4vh;
    left: 18.19vw;
    top: 124.555vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Clicktxt = styled.div`
    position: absolute;
    width: 18.541vw;
    height: 2.22vh;
    left: 24.027vw;
    top: 125.55vh;

    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    font-size: 1.388vw;
    line-height: 2.22vh;

    letter-spacing: 0.2px;
    
    color: #d9d9d9;
`

export const Clickinputunder = styled.input`
    position: absolute;
    width: 30vw;
    height: 4.44vh;
    left: 48.472vw;
    top: 124vh;

    padding-left: 1.25vw;

    outline: 0;
    border: 0;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 1.388vw;
    line-height: 2vh;

    letter-spacing: 0.2px;

    background-color: #ECF8F4;
    color: #C3CBCD;
`
