import React, { useState } from "react";
import FormatTime from "../../components/FormatTime";
import FormatDay from "../../components/FormatDay";

export default function Forecast({ daily, offset }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="container">
			<div className="eachDay">
				{/* seperation between each day */}
				<div className="dayHeader">
					<div className="row">
						<div className="col-2">
							<strong>
								<FormatDay timestamp={daily.sunrise} offset={offset} />
							</strong>
						</div>
						<div className="col-2">
							<strong>{Math.round(daily.temp.max)}°</strong> |{" "}
							{Math.round(daily.temp.min)}°
						</div>
						<div className="col-2">
							<img
								src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
								alt="Weather Icon"
								height={40}
								width={40}
							/>
						</div>
						<div className="text-capitalize col-4 ">
							<strong>{daily.weather[0].description}</strong>
						</div>
					</div>
					<div className="row">
						<div className="col-5">
							Sunrise Time:{" "}
							<FormatTime timestamp={daily.sunrise} offset={offset} />
						</div>
						<div className="col-5">
							Sunset Time:{" "}
							<FormatTime timestamp={daily.sunset} offset={offset} />
						</div>
						<div className="col-2 arrow" onClick={() => setIsOpen(!isOpen)}>
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
									<div className="row detailsSmall">UV Index</div>
									<div className="row">{Math.round(daily.uvi)}</div>
								</div>
								<div className="col-2 p-0">
									<div className="row detailsSmall">Cloud Cover</div>
									<div className="row">{daily.clouds}%</div>
								</div>
								<div className="col-2 p-0">
									<div className="row detailsSmall">Wind Speed</div>
									<div className="row">
										{Math.round(daily.wind_speed * 3.6)} km/h
									</div>
								</div>
								<div className="col-2 p-0">
									<div className="row detailsSmall">Wind Gust</div>
									<div className="row">
										{Math.round(daily.wind_gust * 3.6)} km/h
									</div>
								</div>
							</div>
							<div className="row mt-1 hourlyDetails">
								<div className="col-4 p-0"></div>
								<div className="col-2 p-0">
									<div className="row detailsSmall">Humidity</div>
									<div className="row">{daily.humidity}%</div>
								</div>
								<div className="col-2 p-0">
									<div className="row detailsSmall">Dew Point</div>
									<div className="row">{Math.round(daily.dew_point)}°</div>
								</div>
								<div className="col-2 p-0">
									<div className="row detailsSmall">Pressure</div>
									<div className="row">{daily.pressure} mb</div>
								</div>
							</div>
						</div>
					)}
					<hr />
				</div>
			</div>
		</div>
	);
}
