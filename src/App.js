import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';

function App() {
	return (
		<div className="bg-default">
			<Navbar />
			<Home />
			<About />
			<Projects />
		</div>
	);
}

export default App;
