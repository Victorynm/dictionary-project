import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import Photos from "./Photos";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");
	const [results, setResults] = useState(null);
	const [photos, setPhotos] = useState();

	function changeWord(event) {
		setKeyword(event.target.value);
	}

	function getPhotos(response) {
		console.log(response.data.photos);
		setPhotos(response.data.photos);
	}

	function searchWord(event) {
		event.preventDefault();
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		axios.get(apiUrl).then(handleResponse);

		let pexelsApiKey =
			"563492ad6f9170000100000131881c3c805a4766a9a2d1839cf50f99";
		let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsApiUrl, { headers: headers }).then(getPhotos);
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
			<ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[results]}>
				<Results results={results} />
				<Photos photos={photos} />
			</ErrorBoundary>
		</div>
	);
}
