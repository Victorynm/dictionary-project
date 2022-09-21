import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	console.log(props.meaning.definitions);
	return (
		<div className="Meaning">
			<h4>{props.meaning.partOfSpeech}</h4>
			{props.meaning.definitions.map(function (definition, index) {
				if (definition.example) {
					return (
						<div key={index}>
							<p>
								<strong>Definition:</strong> {definition.definition}
							</p>
							<em>Example: {definition.example}</em>

							<ul>
								<Synonyms synonyms={definition.synonyms} />
							</ul>
						</div>
					);
				} else {
					return (
						<div key={index}>
							<p>
								<strong>Definition:</strong> {definition.definition}
							</p>
						</div>
					);
				}
			})}
		</div>
	);
}
