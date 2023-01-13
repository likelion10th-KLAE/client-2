import React from "react";
import {
  Hide,
  MypageFooter,
  MypageFooterSpan,
  MypageFooterText1,
  MypageFooterText2,
  MypageForm,
  MypageFormbutton,
  MypageFormInput,
  MypageFormTitle,
  MypageLeft,
  MypageLeftImg,
  MypageRight,
  MypageSection,
  Xback,
  Xpic,
  FormItem,
  MypageFormDiv,
} from "./styled";
import { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import Img from "../../../assets/auth/Mypage/push_image.png";

const Mypage = () => {
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

  /* 미리보기 사진 스타일 조정 */
  const imgstyle = {
    width: "20vw",
    height: "20vw",
    borderRadius: "50%",
    cursor: "pointer",
  };

  /*로딩*/
  const [loading, setLoading] = useState(false);

  /*회원정보 수정 구현*/
  // const [mypage, setMypage] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [profile, setProfile] = useState("");

  const getMypage = useCallback(async () => {
    setLoading(true);
    await axios({
      method: "get",
      url: `http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/mypage/`,
      headers: { Authorization: sessionStorage.getItem("token") },
    }).then((response) => {
      // setMypage(response.data);
      console.log("get_response.data: ", response.data);
      setEmail(response.data.email);
      setNickname(response.data.username);
      setImageSrc(
        response.data.profile_image ? response.data.profile_image : Img
      );
      setProfile(
        response.data.profile_image ? response.data.profile_image : Img
      );
      sessionStorage.setItem("profile", profile);
      setLoading(false);
    });
    // console.log("password: ", password);
  });

  const handlePutButton = async () => {
    /*비밀번호나 닉네임 값을 넣지 않았다면*/
    if (!password || !nickname) {
      alert("값을 입력해주세요");
    } else if (password === confirmedPassword && profile) {
      /*profile이 null값이 아니라면*/
      try {
        let formData = new FormData();
        formData.append("profile_image", profile);
        formData.append("password", password);
        formData.append("username", nickname);

        const config = {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: sessionStorage.getItem("token"),
          },
        };

        await axios.put(
          "http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/mypage_put/",
          formData,
          config
        );
        alert("정보 수정이 완료되었습니다.");
        sessionStorage.setItem("profile", profile);
      } catch (e) {
        console.log("에러: ", e);
        console.log("profile: ", profile);
      }
    } else if (password === confirmedPassword && !profile) {
      /*profile이 null값이라면*/
      try {
        await axios({
          method: "put",
          url: "http://ec2-3-39-207-4.ap-northeast-2.compute.amazonaws.com/account/mypage_put/",
          data: {
            profile_image: null,
            password: password,
            username: nickname,
          },
          headers: { Authorization: sessionStorage.getItem("token") },
        });
        alert("정보 수정이 완료되었습니다.");
        sessionStorage.setItem("profile", profile);
      } catch (e) {
        console.log(e);
        console.log("profile: ", profile);
      }
    } else {
      console.log(email, password, nickname, confirmedPassword);
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    getMypage();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <div>로딩 중 ...</div>;
  }

  /* X버튼 누르면 사진 지우기 */
  const deletepic = () => {
    setImageSrc(Img);
    setProfile(null);
  };

  return (
    <MypageSection>
      <MypageLeft>
        <label>
          <Hide>
            <input
              type="file"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
                setProfile(e.target.files[0]);

                //onChangeInfo(e);
              }}
            />
          </Hide>
          <MypageLeftImg>
            {imageSrc && (
              <img src={imageSrc} alt="preview-img" style={imgstyle} />
            )}
          </MypageLeftImg>
        </label>

        <Xback onClick={deletepic}>X</Xback>
      </MypageLeft>
      <MypageRight>
        <MypageForm>
          <FormItem>
            <MypageFormTitle>Nickname</MypageFormTitle>
            <MypageFormInput
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <MypageFormTitle>Email</MypageFormTitle>
            <MypageFormDiv>{email}</MypageFormDiv>
          </FormItem>
          <FormItem>
            <MypageFormTitle>Password</MypageFormTitle>
            <MypageFormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
          <FormItem>
            <MypageFormTitle>Confirm Password</MypageFormTitle>
            <MypageFormInput
              type="password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </FormItem>
          <MypageFormbutton onClick={handlePutButton}>Save</MypageFormbutton>
        </MypageForm>
      </MypageRight>
      <MypageFooter>
        <MypageFooterText1>(c)2022 All right reserved.</MypageFooterText1>
        <MypageFooterText2>
          Questions? Email us at
          <MypageFooterSpan> office@product.com</MypageFooterSpan>
        </MypageFooterText2>
      </MypageFooter>
    </MypageSection>
  );
};

export default Mypage;
