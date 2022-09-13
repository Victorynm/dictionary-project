import React from "react";

export default function Dictionary() {
	return (
		<div className="Dictionary">
			<form>
				<input type="search" placeholder="Search for a word" />
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}
