import "./App.css";
import Navbar from "./Component/Shared/Navbar";
import Hero from "./Component/Landing/Hero";
import Footer from "./Component/Shared/Footer";

function App() {
	return (
		<>
			<main className="bg-[url('/hero-bg.svg')] min-h-svh bg-no-repeat bg-top">
				<Navbar />
				<Hero />
				<Footer />
			</main>
		</>
	);
}

export default App;
