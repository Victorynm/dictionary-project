import "./App.css";
import Dictionary from "./Dictionary";

function App() {
	return (
		<div className="App text-center">
			<header className="App-header"></header>
			<h1>Dictionary</h1>
			<h2>What word do you want to look up?</h2>
			<Dictionary />
			<footer className="m-5">
				<small>Coded by Viktoriia Stanchak</small>
			</footer>
		</div>
	);
}

export default App;
