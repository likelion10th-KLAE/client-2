import React from "react";
import {
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
	FormItem,
} from "./styled";

const Mypage = () => {
	return (
		<MypageSection>
			<MypageLeft>
				<MypageLeftImg />
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
		// <div>어떻게 나오나요</div>
	);
};

export default Mypage;
