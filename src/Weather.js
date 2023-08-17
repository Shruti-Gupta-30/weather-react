import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormatDate";
import "./Weather.css";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		setWeatherData({
			ready: true,

			city: response.data.name,
			temperature: response.data.main.temp,
			maxTemp: response.data.main.temp_max,
			minTemp: response.data.main.temp_min,
			feelsLike: response.data.main.feels_like,

			description: response.data.weather[0].description,
			weather: response.data.weather[0].description,

			pressure: response.data.main.pressure,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,

			date: new Date(response.data.dt * 1000),
			iconUrl:
				"https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg",
		});
	}

	if (weatherData.ready) {
		return (
			<div className="container">
				<div className="weatherApp">
					<header>
						<form>
							<div className="row">
								<div className="col-10 search-bar">
									<input
										type="search"
										placeholder="Search for a city..."
										className="form-control me-2"
										autoFocus="on"
									/>

									<input
										type="submit"
										value="Search"
										className="btn btn-primary searchbtn"
									/>
								</div>

								{/*<div className="col-1">
									<a href="https://www.shecodes.io/">
										<FontAwesomeIcon icon="fa-solid fa-location-dot"></FontAwesomeIcon>
									</a>
		</div>*/}

								<div className="col-1">
									<button className="btn"> °C </button>
								</div>
							</div>
						</form>
					</header>
					<div className="current-weather">
						<ul>
							<li>
								<strong>Current Weather in {weatherData.city}</strong>
							</li>
							<li>
								<FormattedDate date={weatherData.date} />
							</li>
						</ul>
						<div className="row" id="mainData">
							<div className="d-flex weather-temp">
								<img src={weatherData.iconUrl} alt={weatherData.description} />
								<div>
									<span className="temp">
										{Math.round(weatherData.temperature)}
									</span>
									<span className="unit">°C</span>
								</div>
								<ul className="weatherDesc">
									<li className="text-capitalize description">
										{weatherData.description}
									</li>
									<li>Feels like {Math.round(weatherData.feelsLike)}°C</li>
								</ul>
							</div>
						</div>
						<div className="row" id="infoSen">
							The high will reach {Math.round(weatherData.maxTemp)}°C and the
							lowest will be {Math.round(weatherData.minTemp)}°C.
						</div>
						<div className="row" id="categories">
							<div className="col-4">
								<ul>
									<li className="category">Wind</li>
									<li className="categoryData">{weatherData.wind} km/h</li>
								</ul>
							</div>
							<div className="col-4">
								<ul>
									<li className="category">Humidity</li>
									<li className="categoryData">{weatherData.humidity}%</li>
								</ul>
							</div>
							<div className="col-4">
								<ul>
									<li className="category">Pressure</li>
									<li className="categoryData">{weatherData.pressure} mb</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "62d4f30b9b9119acdb354bc943220200";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return "Loading...";
	}
}
