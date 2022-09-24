import React from "react";
import Meaning from "./Meaning";
import ReactAudioPlayer from "react-audio-player";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<div className="row align-items-center text-center">
						<div className="col-lg-4 col-md-6 col-sm-12">
							<h2 className="m-0 fs-1">{props.results.word}</h2>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<p className="text-muted m-0 fs-2">
								{props.results.phonetics[0].text}
							</p>
						</div>
						<div className="col-lg-5 col-md-12 col-sm-12">
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
