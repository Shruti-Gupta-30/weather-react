import React from "react";
import FormattedDate from "./FormatDate";

export default function WeatherData(props) {
	return (
		<div className="forbg">
			<div
				className="current-weather"
				style={{
					backgroundImage: `url(${props.data.background})`,
					backgroundSize: "cover",
				}}
			>
				<ul>
					<li>
						<strong>Current Weather in {props.data.city}</strong>
					</li>
					<li>
						<FormattedDate date={props.data.date} />
					</li>
				</ul>
				<div className="row" id="mainData">
					<div className="d-flex weather-temp">
						<img src={props.data.iconUrl} alt={props.data.description} />
						<div>
							<span className="temp">{Math.round(props.data.temperature)}</span>
							<span className="unit">°C</span>
						</div>
						<ul className="weatherDesc">
							<li className="text-capitalize description">
								{props.data.description}
							</li>
							<li>Feels like {Math.round(props.data.feelsLike)}°C</li>
						</ul>
					</div>
				</div>
				<div className="row" id="infoSen">
					The high will reach {Math.round(props.data.maxTemp)}°C and the lowest
					will be {Math.round(props.data.minTemp)}°C.
				</div>
				<div className="row" id="categories">
					<div className="col-4">
						<ul>
							<li className="category">Wind</li>
							<li className="categoryData">{props.data.wind} km/h</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li className="category">Humidity</li>
							<li className="categoryData">{props.data.humidity}%</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li className="category">Pressure</li>
							<li className="categoryData">{props.data.pressure} mb</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
