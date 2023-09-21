export default function FormatTime(props) {
	const utcTimeStamp = props.timestamp + props.offset;

	const date = new Date(utcTimeStamp * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");

	return `${formattedHours}:${formattedMinutes}`;
}
