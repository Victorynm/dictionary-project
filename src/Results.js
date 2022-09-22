import React from "react";
import Meaning from "./Meaning";
import ReactAudioPlayer from "react-audio-player";

export default function Results(props) {
	console.log(props.results);
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<div className="row align-items-center text-center">
						<div className="col">
							<h2 className="m-0 fs-1">{props.results.word}</h2>
						</div>
						<div className="col">
							<p className="text-muted m-0 fs-2">
								{props.results.phonetics[0].text}
							</p>
						</div>
						<div className="col">
							<ReactAudioPlayer
								src={props.results.phonetics[0].audio}
								controls
							/>
						</div>
					</div>
				</section>
				{props.results.meanings.map(function (meaning, index) {
					return (
						<section key={index}>
							<Meaning meaning={meaning} />
						</section>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
