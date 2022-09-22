import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

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
		setResults(response.data[0]);
	}

	return (
		<div className="Dictionary">
			<section>
				<h2 className="mt-3 text-center">What word do you want to look up?</h2>
				<form className="m-4 text-center" onSubmit={searchWord}>
					<input
						type="search"
						placeholder="Search for a word"
						onChange={changeWord}
					/>
					<button type="submit">Search</button>
				</form>
			</section>
			<Results results={results} />
		</div>
	);
}
