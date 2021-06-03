import React from "react";

import "./style.css";

export function Appbar({ title = "Pão", subtitle = " de queijo" }) {
	return (
		<div className="appbar">
			<div className="title">{title}</div>
			<div className="subtitle">{subtitle}</div>
		</div>
	);
}