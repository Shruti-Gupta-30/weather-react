import "./App.css";
import Weather from "./api/Weather";

export default function App() {
	return (
		<div className="App">
			<Weather defaultCity="New Delhi" />
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
