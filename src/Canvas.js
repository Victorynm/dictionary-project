import React, { useEffect } from "react";

export default function Canvas() {
	useEffect(() => {
		let canvas = document.getElementById("squares");
		let ctx = canvas.getContext("2d");

		ctx.fillStyle = "rgba(227, 127, 127, 0.5)";
		ctx.fillRect(10, 0, 80, 80);
		ctx.fillStyle = "rgba(127, 127, 227, 0.5)";
		ctx.fillRect(60, 40, 80, 80);
		ctx.fillStyle = "rgba(70, 206, 195, 0.5)";
		ctx.fillRect(110, 0, 80, 80);
	}, []);
	return (
		<div className="Canvas">
			<canvas id="squares" width="220" height="160" className="mt-3">
				Your browser does not support the HTML canvas tag.
			</canvas>
		</div>
	);
}
