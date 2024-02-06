import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';

function App() {
	return (
		<div className="bg-default">
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
