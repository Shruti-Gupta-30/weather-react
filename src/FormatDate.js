import React from "react";

export default function FormatDate(props) {
	let { date, offset } = props;
	let sign = true;
	let minutes = 0;
	let hours = 0;
	console.log(offset);

	if (offset > 0 || offset === 0) {
		sign = true;
	} else {
		sign = false;
		offset = -offset;
	}
	console.log(sign);
	console.log(offset);
	while (offset >= 60) {
		minutes = offset;
		offset = offset / 60;
	}
	offset = Math.floor(offset);
	console.log("minutes=" + minutes);
	console.log(offset);

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let day = days[date.getDay()];
	if (sign) {
		hours = date.getUTCHours() + offset;
		minutes = date.getUTCMinutes() + minutes;
		console.log(date.getUTCMinutes());
		console.log("UTCH" + date.getUTCHours());
	} else {
		offset = 12 - offset;
		hours = date.getUTCHours() + offset - 12;
		minutes = date.getUTCMinutes();
		console.log(date.getUTCMinutes());
		console.log("UTCH" + date.getUTCHours());
	}
	while (minutes > 60) {
		minutes = minutes % 60;
		console.log(minutes);
	}
	if (hours < 0) {
		day = days[date.getDay() - 1];
		hours = 24 + hours;
	}

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return (
		<div>
			{day} {hours}:{minutes}
		</div>
	);
}
