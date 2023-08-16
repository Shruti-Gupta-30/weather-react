import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Weather() {
	return (
		<div className="container">
			<header>
				<form>
					<div className="row">
						<div className="col-7">
							<input
								type="search"
								placeholder="Search for a city..."
								className="form-control"
							/>
						</div>
						<div className="col-3">
							<input type="submit" value="Search" className="btn btn-primary" />
						</div>
						<div className="col-1">
							<a href="#">
								<FontAwesomeIcon icon="fa-solid fa-location-dot"></FontAwesomeIcon>
							</a>
						</div>
						<div className="col-1">
							<button className="btn"> °C </button>
						</div>
					</div>
				</form>
			</header>
			<div className="current-weather">
				<ul>
					<li>
						<strong>Current Weather</strong>
					</li>
					<li>13:47</li>
				</ul>
				<div className="row" id="mainData">
					<div className="d-flex weather-temp">
						<img
							src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg"
							alt="weather"
						/>
						<div>
							<span className="temp">33</span>
							<span className="unit">°C</span>
						</div>
						<ul className="weatherDesc">
							<li className="description">Partly Sunny</li>
							<li>Feels like 39°C</li>
						</ul>
					</div>
				</div>
				<div className="row" id="infoSen">
					Expect partly sunny skies. The high will reach 34°C on this humid day.
				</div>
				<div className="row" id="categories">
					<div className="col-4">
						<ul>
							<li className="category">Wind</li>
							<li className="categoryData">5 km/h</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li className="category">Humidity</li>
							<li className="categoryData">61 %</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li className="category">Pressure</li>
							<li className="categoryData">1006 mb</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="footer">
				<p>
					<a href="https://github.com/Shruti-Gupta-30/weather-react">
						{" "}
						Open-Source Code
					</a>{" "}
					by Shruti Gupta
				</p>
			</div>
		</div>
	);
}
