import "./App.css";
import Weather from "./api/Weather";

export default function App() {
	return (
		<>
			<div className="App">
				<Weather defaultCity="New Delhi" />
			</div>
			<footer className=" p-2">
				<p>SkyVue by Shruti Gupta</p>
			</footer>
		</>
	);
}
