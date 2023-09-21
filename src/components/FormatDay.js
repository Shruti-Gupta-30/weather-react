export default function FormatDay(props) {
	const utcTimeStamp = props.timestamp + props.offset;

	const date = new Date(utcTimeStamp * 1000);
	const today = new Date((Date.now() / 1000 + props.offset) * 1000);

	const options = {
		weekday: "long",
		day: "numeric",
	};
	const formattedDate = date.toLocaleString(undefined, options);
	const formattedTodayDate = today.toLocaleString(undefined, options);

	const onlyDate = formattedDate.slice(-2);
	const currentDate = formattedTodayDate.slice(-2);
	const day = formattedDate.substring(0, 3);

	if (onlyDate === currentDate) {
		return "Today";
	} else {
		return day + " " + onlyDate;
	}
}
