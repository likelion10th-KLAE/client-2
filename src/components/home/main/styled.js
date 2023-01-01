import styled from "styled-components";
import Usericon from "../../../assets/diary/유저 정보란.png";
import Sideplant from "../../../assets/diary/마이페이지_사이드바 식물 icon_green.png";
import Sideplantcl from "../../../assets/diary/마이페이지_사이드바 식물 icon_white.png";
import Editimg from "../../../assets/diary/식물 정보 수정하기 버튼.png";
import Logplant from "../../../assets/diary/icons8-화분에-심은-식물-48.png";
import Recommend from '../../../assets/diary/일지 작성 페이지_image.png';

/* 사이드바 */
export const Page= styled.div`
    width: 100vw;
    height: 92vh;
    left: 0px;
    top: 8vh;
    background: #f0f0f0;
`

export const Sidebar = styled.div`
    position: absolute;
    width: 20.8vw;
    height: 92vh;
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
    width: 6.04vw;
    padding-left: 2.6389vw;
    padding-top: 0vh;
    text-align: center;
    display: inline-block;

    font-family: 'Poppins';
    
    font-style: normal;
    font-weight: 700;
    font-size: 2vh;
    line-height: 3vh;
    color: #858585;
    //background-color: black;
`

export const Listcompo = styled.div`
    width: 19.61vw;
    height: 5.99vh;
    margin-bottom: 2.3vh;
    padding-top: 0;
    //background-color: aqua;
    border-radius: 0vh 2.99vh 2.99vh 0vh;
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
    width: 6.04vw;
    padding-left: 2.6389vw;
    padding-top: 0vh;
    text-align: center;
    display: inline-block;

    font-family: 'Poppins';
    
    font-style: normal;
    font-weight: 700;
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

/* access(식물이름, 키운 지 D-day, 수정 버튼) */

export const Plantname = styled.div`
    position:absolute;
    width: 50.493vw;
    height: 5.31vh;
    left: 24.375vw;
    top: 10.889vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;

    //background-color: black;
    color: #858585;
`

export const Plantset = styled.div`
    position:absolute;
    width: 22.493vw;
    height: 3.31vh;
    left: 34.375vw;
    top: 10.889vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.9vw;
    line-height: 54px;
`

export const PlantsetH = styled.div`
    position:absolute;
    width: 22.493vw;
    height: 3.31vh;
    left: 34.375vw;
    top: 10.889vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 2.9vw;
    line-height: 54px;
`

export const Plantdday = styled.div`
    position: absolute;
    width: 10.97vw;
    height: 1.445vh;
    left: 24.51vw;
    top: 16.6222vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1.333vh;
    line-height: 2vh;

    color: #858585;

`

/* 식물 일지 추가하기 버튼 */
export const Infoeditbtn = styled.button`
    position: absolute;
    width: 9.92vw; 
    height: 4.44vh;
    right: 6.5vw;
    top: 13vh;

    border: 1px solid #3CB172;
    outline: 0;
    background: #3CB172;
    border-radius: 11.12vh;
`

/* 식물 사진 */
export const EditImg = styled.div`
    background-image: url(${Editimg});
    position: absolute;
    width: 0.904vw; //비율이,,,이상하다,,
    height: 1.05vh; 
    left: 1.38vw;
    top: 1.64vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const EditTxt = styled.div`
    position: absolute;
    width: 5.772vw;
    height: 1.798vh;
    left: 3.11vw;
    top: 1.4vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 0.694vw;
    line-height: 1.67vh;

    color: #FFFFFF;
`

/* 일지 표시 칸 */
export const LogPage = styled.div`
    position: absolute;
    width: 67.4vw;
    height: 61.1vh;
    left: 24.236vw;
    top: 20.4444vh;

    background: #FFFFFF;
    border: 2px solid #F0F0F0;
    border-radius: 10px;
`

export const LogListsec = styled.div`
    position: absolute;
    width: 62.77vw;
    height: 51vh;
    left: 26.11vw;
    top: 25.467vh;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    ::-webkit-scrollbar{
        display: none;
    }
`

export const LogList =  styled.div`
    width: 62.75vw;
    height: 9.42vh;
    margin-bottom: 3.444vh;

    background: rgba(228, 228, 228, 0.4);
    border-radius: 10px;
`

export const Logplantimg = styled.div`
    background-image: url(${Logplant});
    display: inline-block;
    margin-left: 2.2vw;
    margin-top: 2vh;
    width: 3.33vw;
    height: 5.33vh;

    background-repeat: no-repeat;
    background-size: contain;
`

export const Logtitle = styled.div`
    display: inline-block;
    width: 45.333vw;
    height: 4.222vh;
    margin-left: 6.66vw;
    margin-top: 0vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3.11vh;
    line-height: 4.666vh;

    color: #000000;
`

export const Logdate = styled.div`
    display: inline-block;
    position: absolute;
    width: 6.94444vw;
    height: 1.77778vh;
    margin-top: 0vh;
    margin-left: 52vw;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 1.77778vh;
    line-height: 2.6667vh;

    color: #000000;

`

/*------ 작성된 일지가 없는 경우 ------*/

/* 일지가 비어있어요! 식물을 등록하고 일지를 작성해보세요.*/
export const Text1 = styled.div`
    position: absolute;
    width: 46.736vw;
    height: 8.889;
    left: 24.51vw;
    top: 29.22vh;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 1.94vw;
    line-height: 4.6667vh;

    color: #E5E5E5;
`

/* 키우고 있는 식물이 없다면 맞춤형 식물 추천을 받아보세요 */
export const Text2 = styled.div`
    position: absolute;
    width: 68.72vw;
    height: 7vh;
    left: 24.791vw;
    top: 41vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 2.5vw;
    line-height: 6vh;

    color: #C3CBCD;
`

/* 식물 추천 받기 */
export const Recommendbtn = styled.button`
    position: absolute;
    width: 16vw; //13.88vw;
    height: 5.33vh;
    left: 24.791vw;
    top: 48vh;

    padding-left: 0;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.22vw;
    line-height: 4.33vh;

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(14, 107, 94, 0.89);

    color: rgba(14, 107, 94, 0.89);
`

/* 이미 기르고 있는 식물이 있다면 KLAE에 등록하세요. */
export const Text3 = styled.div`
    position: absolute;
    width: 68.72vw;
    height: 7vh;
    left: 24.791vw;
    top: 61.33vh;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 2.5vw;
    line-height: 6vh;

    color: #C3CBCD;
`

/* 식물 등록 하기 */
export const Registerbtn = styled.button`
    position: absolute;
    width: 16vw; //13.88vw;
    height: 5.33vh;
    left: 24.791vw;
    top: 68.33vh;

    padding-left: 0;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 2.22vw;
    line-height: 4.33vh;

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(14, 107, 94, 0.89);

    color: rgba(14, 107, 94, 0.89);
`
