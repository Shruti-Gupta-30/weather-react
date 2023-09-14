import React from "react";
import Header from "./Header";
import WeatherForecastComponent from "./WeatherForecastComponent";

export default function GetForecast(props) {
	return (
		<div className="WeatherForecast">
			<Header />
			<div className="Forecast">
				<WeatherForecastComponent
					daily={props.forecastData.daily[0]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[1]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[2]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[3]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[4]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[5]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[6]}
					offset={props.forecastData.timezone_offset}
				/>
				<WeatherForecastComponent
					daily={props.forecastData.daily[7]}
					offset={props.forecastData.timezone_offset}
				/>
			</div>
		</div>
	);
}
