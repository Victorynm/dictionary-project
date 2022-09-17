import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState(null);

	function changeWord(event) {
		setKeyword(event.target.value);
	}

	function searchWord(event) {
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		/*console.log(response.data[0]);*/
		setResults(response.data[0]);
	}

	return (
		<div className="Dictionary">
			<form className="m-5" onSubmit={searchWord}>
				<input
					type="search"
					placeholder="Search for a word"
					onChange={changeWord}
				/>
				<input type="submit" value="Search" />
			</form>
			<Results results={results} />
		</div>
	);
}
