import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherData(props) {
	const { data, metric } = props;

	const convertTemperature = (temp) => {
		if (metric.celsius) {
			return temp;
		} else {
			return (temp * 9) / 5 + 32;
		}
	};
	return (
		<div className="forbg">
			<div
				className="current-weather"
				style={{
					backgroundImage: `url(${data.background})`,
					backgroundSize: "cover",
				}}
			>
				<ul>
					<li>
						<strong>Current Weather in {data.city}</strong>
					</li>
					<li>
						<FormatDate date={data.date} offset={data.offset} />
					</li>
				</ul>
				<div className="row" id="mainData">
					<div className="d-flex weather-temp">
						<img src={data.iconUrl} alt={data.description} />
						<div>
							<span className="temp">
								{Math.round(convertTemperature(data.temperature))}
							</span>
							<span className="unit">°{metric.currentUnit}</span>
						</div>
						<ul className="weatherDesc">
							<li className="text-capitalize description">
								{data.description}
							</li>
							<li>
								Feels like {Math.round(convertTemperature(data.feelsLike))}°
								{metric.currentUnit}
							</li>
						</ul>
					</div>
				</div>
				<div className="row" id="infoSen">
					The high will reach {Math.round(convertTemperature(data.maxTemp))}°
					{metric.currentUnit}
					and the lowest will be {Math.round(convertTemperature(data.minTemp))}°
					{metric.currentUnit}.
				</div>
				<div className="row" id="categories">
					<div className="col-4">
						<ul>
							<li className="category">Wind</li>
							<li className="categoryData">{data.wind} km/h</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li className="category">Humidity</li>
							<li className="categoryData">{data.humidity}%</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li className="category">Pressure</li>
							<li className="categoryData">{data.pressure} mb</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
