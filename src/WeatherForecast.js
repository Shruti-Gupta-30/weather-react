import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import FormatTime from "./FormatTime";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
	const [isOpen, setIsOpen] = useState(false);
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);
	let [hours, setHours] = useState();
	let [count, setCount] = useState({ c: 0 });

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
					<div className="container">
						<div className="eachDay">
							{/* seperation between each day */}
							<div className="dayHeader">
								<div className="row">
									<div className="col-2">
										<strong>Today</strong>
									</div>
									<div className="col-6">
										<strong>{Math.round(forecast.daily[0].temp.max)}°</strong> |{" "}
										{Math.round(forecast.daily[0].temp.min)}°
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										Sunrise Time:{" "}
										<FormatTime
											timestamp={forecast.current.sunrise}
											offset={forecast.timezone_offset}
										/>
									</div>
									<div className="col-6">
										Sunset Time:{" "}
										<FormatTime
											timestamp={forecast.daily[0].sunset}
											offset={forecast.timezone_offset}
										/>
									</div>
								</div>
								<hr />
							</div>

							<div className="hourly">
								<div className="row">
									<div className="col-1">
										{" "}
										<FormatTime
											timestamp={Date.now() / 1000}
											offset={forecast.timezone_offset}
										/>
									</div>
									<div className="text-capitalize col-3 ">
										{forecast.hourly[0].weather[0].description}
									</div>
									<div className="col-1 p-0">
										{" "}
										{Math.round(forecast.hourly[0].temp)}°
									</div>
									<div className="col-2 p-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-droplet-fill"
											viewBox="5 0 10 20"
										>
											<path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
										</svg>
										{forecast.hourly[0].pop}%
									</div>
									<div className="col-2 p-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-sun"
											viewBox="5 0 10 18"
										>
											<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
										</svg>
										{Math.round(forecast.hourly[0].uvi)}
									</div>
									<div className="col-2 p-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-wind"
											viewBox="5 0 10 18"
										>
											<path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
										</svg>
										{Math.round(forecast.hourly[0].wind_speed * 3.6)} km/h
									</div>
									<div
										className="col-1 arrow"
										onClick={() => setIsOpen(!isOpen)}
									>
										<div style={{ display: isOpen === true ? "flex" : "none" }}>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="#4390c6"
												className="bi bi-arrow-up-short"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
												/>
											</svg>
										</div>
										<div
											style={{
												display: isOpen === false ? "flex" : "none",
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="#4390c6"
												className="bi bi-arrow-up-short"
												viewBox="0 0 16 16"
											>
												<path
													fillRule="evenodd"
													d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
												/>
											</svg>
										</div>
									</div>
								</div>
								{isOpen && (
									<div className="dropdown">
										<div className="row mt-1 hourlyDetails">
											<div className="col-4 p-0"></div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Feels Like</div>
												<div className="row">
													{Math.round(forecast.hourly[0].feels_like)}°
												</div>
											</div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Cloud Cover</div>
												<div className="row">{forecast.hourly[0].clouds}%</div>
											</div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Visibility</div>
												<div className="row">
													{forecast.hourly[0].visibility / 1000} km
												</div>
											</div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Wind Gust</div>
												<div className="row">
													{Math.round(forecast.hourly[0].wind_gust * 3.6)} km/h
												</div>
											</div>
										</div>
										<div className="row mt-1 hourlyDetails">
											<div className="col-4 p-0"></div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Humidity</div>
												<div className="row">
													{forecast.hourly[0].humidity}%
												</div>
											</div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Dew Point</div>
												<div className="row">
													{Math.round(forecast.hourly[0].dew_point)}°
												</div>
											</div>
											<div className="col-2 p-0">
												<div className="row detailsSmall">Pressure</div>
												<div className="row">
													{forecast.hourly[0].pressure} mb
												</div>
											</div>
										</div>
									</div>
								)}
								<hr />
							</div>

							{/* onehour ends here */}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "001bc651977f4b024af4d84282b0f02a";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading...";
	}
}
