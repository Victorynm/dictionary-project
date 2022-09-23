import "./App.css";
import Dictionary from "./Dictionary";
import Canvas from "./Canvas";

function App() {
	return (
		<div className="App">
			<div className="content">
				<header className="App-header mt-3">
					<div className="row  justify-content-center align-items-center">
						<div className="col col-2 ">
							<Canvas />
						</div>

						<div className="col col-4">
							<h1 className="m-3">Dictionary</h1>
						</div>
					</div>
				</header>

				<Dictionary />
			</div>
			<footer className="row justify-content-center align-items-end">
				<div className="col col-1 footer">
					<small>Coded by Viktoriia Stanchak</small>
				</div>
			</footer>
		</div>
	);
}

export default App;
