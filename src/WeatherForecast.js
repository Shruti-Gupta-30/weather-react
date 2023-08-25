import React, { useState } from "react";
import Header from "./Header";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="WeatherForecast">
			<Header />
			<div className="Forecast">
				<div className="container">
					<div className="eachDay">
						<div className="dayHeader">
							<div className="row">
								<div className="col-2">
									<strong>Today</strong>
								</div>
								<div className="col-6">
									<strong>24°</strong> | 21°
								</div>
							</div>
							<div className="row">
								<div className="col-6">Sunrise Time: 06:45</div>
								<div className="col-6">Sunset Time: 06:45</div>
							</div>
							<hr />
						</div>
						<div className="hourly">
							<div className="row">
								<div className="col-1"> 04:45</div>
								<div className="col-3 ">Mostly Cloudy</div>
								<div className="col-1 p-0"> 21°</div>
								<div className="col-2 p-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-droplet-fill"
										viewBox="5 0 10 20"
									>
										<path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
									</svg>
									45%
								</div>
								<div className="col-2 p-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-sun"
										viewBox="5 0 10 18"
									>
										<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
									</svg>
									0
								</div>
								<div className="col-2 p-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-wind"
										viewBox="5 0 10 18"
									>
										<path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
									</svg>
									45km/h
								</div>
								<div className="col-1 arrow" onClick={() => setIsOpen(!isOpen)}>
									<div style={{ display: isOpen === true ? "flex" : "none" }}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="#4390c6"
											class="bi bi-arrow-up-short"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
											/>
										</svg>
									</div>
									<div style={{ display: isOpen === false ? "flex" : "none" }}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="#4390c6"
											class="bi bi-arrow-up-short"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
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
											<div className="row">22°</div>
										</div>
										<div className="col-2 p-0">
											<div className="row detailsSmall">Cloud Cover</div>
											<div className="row">84%</div>
										</div>
										<div className="col-2 p-0">
											<div className="row detailsSmall">Visibility</div>
											<div className="row">6 km</div>
										</div>
										<div className="col-2 p-0">
											<div className="row detailsSmall">Wind Gust</div>
											<div className="row">16 km/h</div>
										</div>
									</div>
									<div className="row mt-1 hourlyDetails">
										<div className="col-4 p-0"></div>
										<div className="col-2 p-0">
											<div className="row detailsSmall">Humidity</div>
											<div className="row">96%</div>
										</div>
										<div className="col-2 p-0">
											<div className="row detailsSmall">Dew Point</div>
											<div className="row">21°</div>
										</div>
										<div className="col-2 p-0">
											<div className="row detailsSmall">Pressure</div>
											<div className="row">1006 mb</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
