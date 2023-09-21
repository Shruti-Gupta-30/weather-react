import React from "react";

export default function FormatDate(props) {
	const utcTimeStamp = props.timestamp / 1000 + props.offset;

	const date = new Date(utcTimeStamp * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");

	let dayIndex = date.getUTCDay();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const day = days[dayIndex];

	return (
		<div>
			{day} {formattedHours}:{formattedMinutes}
		</div>
	);
}
