import React from "react";
import Forecast from "./Forecast";
// import Header from "../Header/Header";

export default function GetForecast({ forecastData }) {
	const offset = forecastData.timezone_offset;
	const daily = forecastData.daily;

	return (
		<div className="WeatherForecast">
			{/* <Header daily={daily} offset={offset} /> */}
			<div className="Forecast">
				<Forecast daily={daily[0]} offset={offset} />
				<Forecast daily={daily[1]} offset={offset} />
				<Forecast daily={daily[2]} offset={offset} />
				<Forecast daily={daily[3]} offset={offset} />
				<Forecast daily={daily[4]} offset={offset} />
				<Forecast daily={daily[5]} offset={offset} />
				<Forecast daily={daily[6]} offset={offset} />
				<Forecast daily={daily[7]} offset={offset} />
			</div>
		</div>
	);
}
