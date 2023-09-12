export default function FormatTime(props) {
	const utcTimeStamp = props.timestamp + props.offset;

	const date = new Date(utcTimeStamp * 1000);
	const hours = date.getUTCHours();

	return `${hours}`;
}
