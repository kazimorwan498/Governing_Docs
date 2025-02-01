import "./App.css";
import Navbar from "./Component/Shared/Navbar";
import Hero from "./Component/Landing/Hero";
import Footer from "./Component/Shared/Footer";
import ProblemSolution from "./Component/Landing/ProblemSolution/ProblemSolution";
import Reviews from "./Component/Landing/Reviews/Reviews";

function App() {
	return (
		<>
			<main className="bg-[url('/hero-bg.svg')] min-h-svh bg-no-repeat bg-top">
				<Navbar />
				<Hero />
				<ProblemSolution />
				<Reviews />
				<Footer />
			</main>
		</>
	);
}

export default App;
