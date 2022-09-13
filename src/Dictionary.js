import React, { useState } from "react";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");

	function changeWord(event) {
		setKeyword(event.target.value);
	}

	function searchWord(event) {
		event.preventDefault();
		alert(`Search for ${keyword}`);
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
