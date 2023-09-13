import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import Header from "./Header";
import WeatherForecastComponent from "./WeatherForecastComponent";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);
	let [hours, setHours] = useState();

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data);
		let utcTimeStamp = Date.now() / 1000 + response.data.timezone_offset;
		let date = new Date(utcTimeStamp * 1000);
		setHours(date.getUTCHours());
		console.log(response.data);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<Header />
				<div className="Forecast">
					<WeatherForecastComponent
						daily={forecast.daily[0]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[1]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[2]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[3]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[4]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[5]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[6]}
						offset={forecast.timezone_offset}
					/>
					<WeatherForecastComponent
						daily={forecast.daily[7]}
						offset={forecast.timezone_offset}
					/>
				</div>
			</div>
		);
	} else {
		let apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading...";
	}
}
