import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");

	function changeWord(event) {
		setKeyword(event.target.value);
	}

	function searchWord(event) {
		event.preventDefault();
		alert(`Search for ${keyword}`);
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		console.log(response.data[0]);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={searchWord}>
				<input
					type="search"
					placeholder="Search for a word"
					onChange={changeWord}
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}
