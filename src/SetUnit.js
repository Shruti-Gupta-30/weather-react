import React, { useReducer, useState } from "react";

export default function SetUnit(props) {
	console.log(props.temperature);
	const initialTemps = [
		{ current: props.temperature },
		{ Temp: props.maxTemp },
		{ Temp: props.minTemp },
		{ Temp: props.feelsLike },
	];

	const reducer = (state, action) => {
		switch (action.type) {
			case "IMPERIAL":
				return state.map((Temp) => (Temp * 9) / 5 + 32);
			case "METRIC":
				return state.map((Temp) => ((Temp - 32) * 5) / 9);
			default:
				return state.map((Temp) => Temp);
		}
	};
	const [state, dispatch] = useReducer(reducer, initialTemps);
	const [metric, setMetric] = useState({ celsius: true, unit: "F" });
	const checkUnit = (metric) => {
		if (metric.celsius) {
			dispatch({ type: "IMPERIAL" });
			setMetric({ celsius: false, unit: "C" });
		} else {
			dispatch({ type: "METRIC" });
			setMetric({ celsius: true, unit: "F" });
		}
	};
	console.log(state.current);
	return (
		<button
			className="btn btn-primary changeUnit"
			onClick={() => checkUnit(metric)}
		>
			{" "}
			°{metric.unit}{" "}
		</button>
	);
}
