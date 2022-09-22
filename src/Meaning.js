import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	return (
		<div className="Meaning text-start p-4">
			<h3 className="text-center mb-3">{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				if (definition.example) {
					return (
						<div key={index}>
							<p>{definition.definition}</p>
							<em>{definition.example}</em>

							<ul className="p-0 mt-3">
								<Synonyms synonyms={definition.synonyms} />
							</ul>
						</div>
					);
				} else {
					return (
						<div key={index}>
							<p>{definition.definition}</p>
						</div>
					);
				}
			})}
		</div>
	);
}
