import React, { useState, useRef } from "react";
import "./Header.css";

export default function Header() {
	const [select, setSelect] = useState(1);
	const [display, setDisplay] = useState(true);
	const listRef = useRef(null);
	const headerLinks = [
		{ id: 1, title: "Today" },
		{ id: 2, title: "Fri 25" },
		{ id: 3, title: "Sat 26" },
		{ id: 4, title: "Sun 27" },
		{ id: 5, title: "Mon 28" },
		{ id: 6, title: "Tue 29" },
		{ id: 7, title: "Wed 30" },
	];
	function rightScroll(event) {
		event.preventDefault();
		listRef.current.scrollLeft += 200;
		setDisplay(false);
	}
	function leftScroll(event) {
		event.preventDefault();
		listRef.current.scrollLeft -= 200;
		setDisplay(true);
	}

	return (
		<div className="Header">
			<div
				className="left-arrow"
				onClick={leftScroll}
				style={{ display: display === false ? "flex" : "none" }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#4390c6"
					class="bi bi-caret-left-fill"
					viewBox="0 -0.5 17 17"
				>
					<path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
				</svg>
			</div>
			<ul ref={listRef}>
				{headerLinks.map(({ id, title }) => (
					<li key={id}>
						<a
							href="https://www.youtube.com/"
							style={{ background: select === id ? "#205b85" : "" }}
							onClick={() => setSelect(id)}
						>
							{title}
						</a>
					</li>
				))}
			</ul>
			<div
				className="right-arrow"
				onClick={rightScroll}
				style={{ display: display === true ? "flex" : "none" }}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#4390c6"
					class="bi bi-caret-right-fill"
					viewBox="0 -0.5 15 17"
				>
					<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
				</svg>
			</div>
		</div>
	);
}
