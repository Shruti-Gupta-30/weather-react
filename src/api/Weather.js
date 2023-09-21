import React, { useState } from "react";
import ShowCurrentWeather from "../containers/CurrentWeather/ShowCurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import codeMapping from "../img/mapping";
import "./Weather.css";

/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

export default function Weather(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [metric, setMetric] = useState({
		celsius: true,
		unit: "F",
		currentUnit: "C",
	});

	function HandleResponse(response) {
		console.log(response.data);

		setWeatherData({
			ready: true,
			coordinates: response.data.coord,

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

			offset: response.data.timezone,
			iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			background: codeMapping[response.data.weather[0].icon],
		});
	}

	function checkUnit(event) {
		event.preventDefault();
		if (metric.celsius) {
			setMetric({ celsius: false, unit: "C", currentUnit: "F" });
		} else {
			setMetric({ celsius: true, unit: "F", currentUnit: "C" });
		}
	}

	function search() {
		const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(HandleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	if (weatherData.ready) {
		return (
			<div className="container">
				<div className="weatherApp">
					<header>
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-10 search-bar">
									<input
										type="search"
										placeholder="Search for a city..."
										className="form-control me-2"
										autoFocus="on"
										onChange={(event) => setCity(event.target.value)}
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
									<button
										className="btn btn-primary changeUnit"
										onClick={checkUnit}
									>
										{" "}
										°{metric.unit}{" "}
									</button>
								</div>
							</div>
						</form>
					</header>
					<ShowCurrentWeather data={weatherData} metric={metric} />
					<WeatherForecast coordinates={weatherData.coordinates} />
				</div>
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
