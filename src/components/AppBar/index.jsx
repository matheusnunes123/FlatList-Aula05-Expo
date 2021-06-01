import React from "react";

import "./style.css";

export function Appbar({ title = "", subtitle = "" }) {
	return (
		<div className="appbar">
			<div className="title">{title}</div>
			<div className="subtitle">{subtitle}</div>
		</div>
	);
}