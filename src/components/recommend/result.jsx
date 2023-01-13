import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
	UpResult,
	Text,
	KorName,
	DownResult,
	ResultPlant,
	PlantItem,
	PlantName,
	Kor,
	Button,
	RigntInfo,
	Atr1,
	Atr2,
	AtrTitle,
	Item,
	ItemTitle,
	ItemConts,
	AtrTitle2,
	Item2,
	ItemConts2,
	AddButton,
	AtrLeft,
} from "./styled";
import plantimg from "../../assets/recommend/my_plant.png";

const color = ["#F183F3", "#8388f3", "#F3B983"];

const Result = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const addPlant = () => {
		navigate(`/plant/addplant/createplant`, {
			state: location.state.plant_name,
		});
	};
	const reRecommend = () => {
		navigate(`/recommend/test`);
	};

	return (
		<>
			<UpResult>
				<Text>클레님에게 추천드리는 식물은:</Text>
				<KorName>{location.state.plant_name}</KorName>
				<Button onClick={reRecommend}>식물 추천 다시 받기</Button>
			</UpResult>
			<DownResult>
				<PlantItem>
					{location.state.plant_image ? (
						<img
							src={location.state.plant_image}
							alt="alt"
							style={{ width: "20vw" }}
						/>
					) : (
						<ResultPlant>
							<img src={plantimg} />
						</ResultPlant>
					)}

					<PlantName>
						<Kor>{location.state.plant_name}</Kor>
					</PlantName>
				</PlantItem>
				<RigntInfo>
					<Atr1>
						<AtrLeft>
							<AtrTitle>특징</AtrTitle>
							<Item>
								<ItemTitle>키우기 난이도</ItemTitle>
								<ItemConts atr="difficulty">
									{location.state.difficulty}
								</ItemConts>
							</Item>
							<Item>
								<ItemTitle>기능</ItemTitle>
								<ItemConts atr="function">
									{location.state.plant_function ? (
										location.state.plant_function
											.split(" ")
											.map((f, idx) => (
												<div style={{ color: color[idx] }}>{f}</div>
											))
									) : (
										<>{location.state.plant_function}</>
									)}
								</ItemConts>
							</Item>
							<Item>
								<ItemTitle>수경재배</ItemTitle>
								<ItemConts atr="hydroponics">
									{location.state.hydroponics}
								</ItemConts>
							</Item>
						</AtrLeft>
						<AddButton onClick={addPlant}>+ 내 식물로 추가하기</AddButton>
					</Atr1>
					<Atr2>
						<AtrTitle2>식물 설명</AtrTitle2>
						<Item2>
							<ItemConts2>{location.state.description}</ItemConts2>
						</Item2>
					</Atr2>
				</RigntInfo>
			</DownResult>
		</>
	);
};

export default Result;
