import React from "react";
import Meaning from "./Meaning";
import ReactAudioPlayer from "react-audio-player";

export default function Results(props) {
	console.log(props.results);
	if (props.results) {
		return (
			<div className="Results">
				<h2>{props.results.word}</h2>
				<h3 className="text-muted">{props.results.phonetic}</h3>
				<ReactAudioPlayer src={props.results.phonetics[0].audio} controls />
				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
