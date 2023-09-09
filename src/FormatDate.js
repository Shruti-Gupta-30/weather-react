import React from "react";

export default function FormatDate(props) {
	let { date, offset } = props;
	let minutes = 0;

	const sign = offset >= 0 ? 1 : -1;
	offset = Math.abs(offset);

	while (offset >= 60) {
		minutes = offset;
		offset = offset / 60;
	}
	while (minutes > 60) {
		minutes = minutes % 60;
	}

	let hours = date.getUTCHours() + sign * Math.floor(offset);
	console.log(date.getUTCHours() + "offset " + offset);
	minutes = date.getUTCMinutes() + sign * minutes;

	if (minutes >= 60) {
		minutes -= 60;
		hours += 1;
	} else if (minutes < 0) {
		minutes += 60;
		hours -= 1;
	}

	if (hours >= 24) {
		hours -= 24;
	} else if (hours < 0) {
		hours += 24;
	}
	//Daypart needs to be optimized
	let dayIndex = date.getDay();

	if (sign === -1) {
		dayIndex = (dayIndex + 6) % 7;
	}
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

	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");

	return (
		<div>
			{day} {formattedHours}:{formattedMinutes}
		</div>
	);
}
