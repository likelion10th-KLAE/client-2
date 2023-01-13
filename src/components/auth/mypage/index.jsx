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
} from "./styled";
import { useState, useRef } from "react";

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

	/* X버튼 누르면 사진 지우기 */
	const deletepic = () => {
		setImageSrc(Img);
	};

	/* 미리보기 사진 스타일 조정 */
	const imgstyle = {
		width: "20vw",
		height: "20vw",
		borderRadius: "50%",
		cursor: "pointer",
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
						<MypageFormInput />
					</FormItem>
					<FormItem>
						<MypageFormTitle>Email</MypageFormTitle>
						<MypageFormInput />
					</FormItem>
					<FormItem>
						<MypageFormTitle>Password</MypageFormTitle>
						<MypageFormInput />
					</FormItem>
					<FormItem>
						<MypageFormTitle>Confirm Password</MypageFormTitle>
						<MypageFormInput />
					</FormItem>
					<MypageFormbutton>Save</MypageFormbutton>
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
