import React, { useState } from "react";
import axios from "axios";

export default function Search() {
	const [city, setCity] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [weather, setWeather] = useState({});

	function showWeather(response) {
		setLoaded(true);
		console.log(response);
		setWeather({
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			windSpeed: response.data.wind.speed,
			description: response.data.weather[0].description,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46fac47dd8b8fa26d1b6852218ad3dfe&units=metric`;
		axios.get(apiUrl).then(showWeather);
	}
	function getCity(event) {
		event.preventDefault();
		setCity(event.target.value);
	}

	let form = (
		<form onSubmit={handleSubmit}>
			<input type="search" placeholder="Type a City Name" onChange={getCity} />
			<input type="submit" value="Search" />
		</form>
	);

	if (loaded) {
		return (
			<div>
				<div> {form} </div>
				<ul>
					<li> Temperature: {Math.round(weather.temperature)}°C</li>
					<li>Humidity: {weather.humidity}%</li>
					<li>Wind Speed: {weather.windSpeed}km/h</li>
					<li>
						<img src={weather.icon} alt="weather visual" />
					</li>
					<li>{weather.description}</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}
