import React from "react";

import "../styles/index.scss";

import "../utils/icons.js";

export const SimpleCounter = props => {
	return (
		<div className="bigCounter">
			Hello
			<div className="calendar">
				<i class="far fa-clock" />
			</div>
			<div className="four" />
			<div className="three" />
			<div className="two" />
			<div className="one" />
		</div>
	);
};
