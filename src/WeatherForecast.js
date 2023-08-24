import React from "react";
import Header from "./Header";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	return (
		<div className="WeatherForecast">
			<Header />
			<div className="today"></div>
		</div>
	);
}
