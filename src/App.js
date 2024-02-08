import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import React from 'react';


function App() {


	return (
		<div className="bg-default">
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
			<div className='footer'>
				<p> Copyright © {new Date().getFullYear()} - Taha</p>
			</div>
		</div>
	);
}

export default App;
