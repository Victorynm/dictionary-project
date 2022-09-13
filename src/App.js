import "./App.css";

function App() {
	return (
		<div className="App text-center">
			<header className="App-header"></header>
			<h1>Dictionary</h1>
			<h2>What word do you want to look up?</h2>
			<form>
				<input type="search" />
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}

export default App;
