import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Editbtn,
  Infoback,
  PageBack,
  PageTitle,
  SpecTxt,
  SpecInput,
  BasicInfo,
  Plantpic,
  Plantpicback,
  Imageback,
  Imagepic,
  Xback,
  Xpic,
  Plantname,
  PlantnameInput,
  Growtmp,
  Growtmpinput,
  Sunshine,
  Sunshineinput,
  Water,
  Waterinput,
  Detail,
  TodoandA,
  Clickandinput,
  WaterCB,
  NutriCB,
  RepotCB,
  FirstdayCB,
  ClickCB,
  Watericon,
  Nutriicon,
  Repoticon,
  Firstdayicon,
  Clickicon,
  Watertxt,
  Nutritxt,
  Repottxt,
  Firstdaytxt,
  Clicktxt,
  Watertxtb,
  Nutritxtb,
  Repottxtb,
  Firstdaytxtb,
  Clicktxtb,
  Waterinputunder,
  Nutriinputunder,
  Repotinputunder,
  Firstdayinputunder,
  Clickinputunder,
  Main,
  Hide,
} from "./styled";
import Img from "../../../assets/add_plant/my_plant.png";
import { useParams } from "react-router-dom";

const Createplant = () => {
  const location = useLocation(); // 식물 추천에서 온 경우
  const [loading, setLoading] = useState(false);

  /* 이미지 미리보기 구현 */
  const [imageSrc, setImageSrc] = useState(Img);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  /* */

  /* X버튼 누르면 사진 지우기 */
  const deletepic = () => {
    setImageSrc(Img);
  };

  /* 식물 사진 스타일 조정 */
  const plantstyle = {
    width: "18.75vw",
    height: "30vh",
    borderRadius: "50%",
  };
  /***checkbox 여부에 따라 디자인 변경 ***/
  const [waterCheck, setWaterCheck] = useState(false);
  const [nutriCheck, setNutriCheck] = useState(false);
  const [repotCheck, setRepotCheck] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [clickCheck, setClickCheck] = useState(false);

  const checkCSS = (e) => {
    switch (e.target.id) {
      case "waterCB":
        e.target.checked ? setWaterCheck(true) : setWaterCheck(false);
        break;
      case "nutriCB":
        e.target.checked ? setNutriCheck(true) : setNutriCheck(false);
        break;
      case "repotCB":
        e.target.checked ? setRepotCheck(true) : setRepotCheck(false);
        break;
      case "firstCB":
        e.target.checked ? setFirstCheck(true) : setFirstCheck(false);
        break;
      case "clickCB":
        e.target.checked ? setClickCheck(true) : setClickCheck(false);
        break;
      default:
        break;
    }
  };

  /********* 체크된 데이터 입력값 받아오기 ************/
  const checkedData = new Set();
  const checkData = (e) => {
    checkedData.add(e.target.id);
  };

  /*****입력 데이터 받아오기*********/
  const [info, setInfo] = useState({
    spec: "",
    pic: "",
    name: "",
    tmp: 0,
    sun: 0,
    water: 0,
    last_water: 0,
    nutri: 0,
    repot: 0,
    first: 0,
    click: "",
  });

  const onChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  /************ 입력 데이터 넘기기 *****************/
  const params = useParams();
	const postid = params.postid;

  const onClickSave = (e) => {
    savePlant();
    console.log(info);
  };

  const savePlant = async()=>{
    setLoading(true);
    
    await axios({
			method: "post",
			url: 
      `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/plants/post/`,
			headers: { Authorization: sessionStorage.getItem("token") },
			data: { 
        plant: info.spec,
        userplant_image: info.pic,
		  	name: info.name,
		  	temperature: info.tmp,
		  	light: info.sun,
		  	water_amount: info.water,
		  	last_watered: info.last_water,
		  	tonic: info.nutri,
		  	repot: info.repot,
		  	start_date: info.first,
		  	extra1: info.click1,
		  	extra2: info.click2 },
		}).then(() => {
			setLoading(false);
		});
	};


  return (
    <div>
      <PageBack>
        <PageTitle>식물 정보 등록</PageTitle>
        <Editbtn onClick={onClickSave}>저장하기</Editbtn>
        <Infoback>
          <SpecTxt>식물 종</SpecTxt>
          <SpecInput
            id="spec"
            name="spec"
            onChange={onChangeInfo}
            defaultValue={location.state ? location.state : ""}
            /* 직접 추가할때 입력이 안되서 value->defaultValue로 변경*/
          />

          {/* 식물 이미지 미리보기 */}
          <Plantpicback>
            <Plantpic>
              {imageSrc && (
                <img src={imageSrc} alt="preview-img" style={plantstyle} />
              )}
            </Plantpic>
          </Plantpicback>

          <label>
            <Hide>
              <input
                type="file"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                  onChangeInfo(e);
                }}
              />
            </Hide>
            <Imageback>
              <Imagepic />
            </Imageback>
          </label>

          <label>
            <Xback onClick={deletepic}>
              <Xpic />
            </Xback>
          </label>

          <BasicInfo>기본 정보 및 생육 환경</BasicInfo>
          <Plantname>식물 이름</Plantname>
          <PlantnameInput id="name" name="name" onChange={onChangeInfo} />

          <Growtmp>생육 온도(℃)</Growtmp>
          <Growtmpinput id="tmp" name="tmp" onChange={onChangeInfo} />

          <Sunshine>일조량(lux)</Sunshine>
          <Sunshineinput id="sun" name="sun" onChange={onChangeInfo} />

          <Water>1회 급수량(ml)</Water>
          <Waterinput id="water" name="water" onChange={onChangeInfo} />

          <Detail>추가 세부 정보 입력</Detail>
          <TodoandA>Todos and Anniversary</TodoandA>
          <Clickandinput>클릭 후 입력하세요.</Clickandinput>

          <label>
            <WaterCB
              type="checkbox"
              id="waterCB"
              name="checkbox"
              onClick={(e) => {
                checkCSS(e);
                checkData(e);
              }}
            ></WaterCB>
            <Watericon />

            {waterCheck ? (
              <>
                <Watertxtb>마지막 급수 날짜</Watertxtb>
                <Waterinputunder
                  type="text"
                  id="last_water"
                  name="last_water"
                  onChange={onChangeInfo}
                  placeholder="날짜로 입력 (yyyy.mm.dd)"
                ></Waterinputunder>
              </>
            ) : (
              <>
                <Watertxt>마지막 급수 날짜</Watertxt>
                <Waterinputunder
                  type="text"
                  id="last_water"
                  name="last_water"
                  disabled
                  onChange={onChangeInfo}
                  placeholder="날짜로 입력 (yyyy.mm.dd)"
                ></Waterinputunder>
              </>
            )}
          </label>

          <label>
            <NutriCB
              type="checkbox"
              id="nutriCB"
              name="checkbox"
              onClick={(e) => {
                checkCSS(e);
                checkData(e);
              }}
            ></NutriCB>
            <Nutriicon />

            {nutriCheck ? (
              <>
                <Nutritxtb>영양제 투여 주기</Nutritxtb>
                <Nutriinputunder
                  type="text"
                  id="nutri"
                  name="nutri"
                  onChange={onChangeInfo}
                  placeholder="일수로 입력"
                ></Nutriinputunder>
              </>
            ) : (
              <>
                <Nutritxt>영양제 투여 주기</Nutritxt>
                <Nutriinputunder
                  type="text"
                  id="nutri"
                  name="nutri"
                  disabled
                  onChange={onChangeInfo}
                  placeholder="일수로 입력"
                ></Nutriinputunder>
              </>
            )}
          </label>

          <label>
            <RepotCB
              type="checkbox"
              id="repotCB"
              name="checkbox"
              onClick={(e) => {
                checkCSS(e);
                checkData(e);
              }}
            ></RepotCB>
            <Repoticon />

            {repotCheck ? (
              <>
                <Repottxtb>분갈이 주기</Repottxtb>
                <Repotinputunder
                  type="text"
                  id="repot"
                  name="repot"
                  onChange={onChangeInfo}
                  placeholder="일수로 입력"
                ></Repotinputunder>
              </>
            ) : (
              <>
                <Repottxt>분갈이 주기</Repottxt>
                <Repotinputunder
                  type="text"
                  id="repot"
                  name="repot"
                  disabled
                  onChange={onChangeInfo}
                  placeholder="일수로 입력"
                ></Repotinputunder>
              </>
            )}
          </label>

          <label>
            <FirstdayCB
              type="checkbox"
              id="firstCB"
              name="checkbox"
              onClick={(e) => {
                checkCSS(e);
                checkData(e);
              }}
            ></FirstdayCB>
            <Firstdayicon />

            {firstCheck ? (
              <>
                <Firstdaytxtb>식물과 처음 함께 한 날</Firstdaytxtb>
                <Firstdayinputunder
                  type="text"
                  id="first"
                  name="first"
                  onChange={onChangeInfo}
                  placeholder="날짜로 입력 (yyyy.mm.dd)"
                ></Firstdayinputunder>
              </>
            ) : (
              <>
                <Firstdaytxt>식물과 처음 함께 한 날</Firstdaytxt>
                <Firstdayinputunder
                  type="text"
                  id="first"
                  name="first"
                  disabled
                  onChange={onChangeInfo}
                  placeholder="날짜로 입력 (yyyy.mm.dd)"
                ></Firstdayinputunder>
              </>
            )}
          </label>

          <label>
            <ClickCB
              type="checkbox"
              id="clickCB"
              name="checkbox"
              onClick={(e) => {
                checkCSS(e);
                checkData(e);
              }}
            ></ClickCB>
            <Clickicon />

            {clickCheck ? (
              <>
                <Clicktxtb placeholder="클릭하여 항목을 추가하세요."></Clicktxtb>
                <Clickinputunder
                  type="text"
                  id="click"
                  name="click"
                  onChange={onChangeInfo}
                  placeholder="항목을 추가 후 자유롭게 입력하세요."
                ></Clickinputunder>
              </>
            ) : (
              <>
                <Clicktxt
                  disabled
                  placeholder="클릭하여 항목을 추가하세요."
                ></Clicktxt>
                <Clickinputunder
                  type="text"
                  id="click"
                  name="click"
                  disabled
                  onChange={onChangeInfo}
                  placeholder="항목을 추가 후 자유롭게 입력하세요."
                ></Clickinputunder>
              </>
            )}
          </label>
        </Infoback>
      </PageBack>
    </div>
  );
};

export default Createplant;

