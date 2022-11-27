import React from "react";
import {
	UpResult,
	Text,
	KorName,
	EngName,
	DownResult,
	ResultPlant,
	LikeInfo,
	LikeText,
	Sun,
	InforText,
	Water,
	DetailText,
	Temp,
	Infor,
	InforCon,
	PlantItem,
	PlantName,
	Icon,
	Eng,
	Kor,
	Volume,
	VolText,
	Circle,
} from "./styled";
import plantimg from "../../assets/recommend/my_plant.png";
import waterGray from "../../assets/recommend/water_gray.png";
import waterBlue from "../../assets/recommend/water_blue.png";
import sun from "../../assets/recommend/sun.png";

const plant = {
	korName: "알로카시아 밤비노",
	engName: "alocasia bambino",
	inform:
		"Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor",
	sum: 100,
	water: 50,
	temp: 60,
};

// const setSun = () => {

// }

const Result = () => {
	return (
		<>
			<UpResult>
				<Text>클레님에게 추천드리는 식물은:</Text>
				<KorName>{plant.korName}</KorName>
				<EngName>{plant.engName}</EngName>
			</UpResult>
			<DownResult>
				<LikeInfo>
					<LikeText>Like</LikeText>
					<Sun>
						<DetailText>햇빛</DetailText>
						<Icon>
							<img src={sun} />
							<img src={sun} />
							<img src={sun} />
							<img src={sun} />
							<img src={sun} />
						</Icon>
					</Sun>
					<Water>
						<DetailText>물</DetailText>
						<Icon>
							<img src={waterBlue} />
							<img src={waterBlue} />
							<img src={waterBlue} />
							<img src={waterGray} />
							<img src={waterGray} />
						</Icon>
					</Water>
					<Temp>
						<DetailText>온도</DetailText>
						<Volume>
							<VolText>22°</VolText>
							<hr />
							<Circle>1111</Circle>
							<VolText>25°</VolText>
						</Volume>
					</Temp>
				</LikeInfo>
				<PlantItem>
					<ResultPlant>
						<img src={plantimg} />
					</ResultPlant>
					<PlantName>
						<Eng>{plant.engName}</Eng>
						<Kor>{plant.korName}</Kor>
					</PlantName>
				</PlantItem>
				<Infor>
					<InforText>식물 설명</InforText>
					<InforCon>{plant.inform}</InforCon>
				</Infor>
			</DownResult>
		</>
	);
};

export default Result;
