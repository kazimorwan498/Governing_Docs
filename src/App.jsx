import "./App.css";
import Buttons from "./Component/Global/Buttons";
import Headings from "./Component/Global/Headings";

function App() {
	return (
		<>
			<h1 className="text-7xl text-center font-bold tracking-widest">
				Hello World
			</h1>
			<Buttons>Primary Button</Buttons>
			<Buttons className="bg-white text-black">Secondary Button</Buttons>
			<Headings gradient="Solution">Problem & </Headings>
		</>
	);
}

export default App;
