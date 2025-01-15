import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./main.css";
import Home from "./pages/home.jsx";
import AboutMe from "./pages/about_me.jsx"
import Projects from "./pages/projects.jsx";
import Skills from "./pages/skills.jsx";
import Contact from "./pages/contact.jsx";

// Main App Component that renders all sections of the portfolio.
const App = () => {
	return (
		<Router>
			
			<div className="App">
			
			<header className="App-header">
			<Link to="/" className="HomePageButton"><h1>Welcome to My Portfolio</h1></Link>
				<nav className="navbar">
					<ul className="navbar-links">
						<li>
							<Link to="/about-me">About Me</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/skills">Skills</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				
			</header>

			<main>
			<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about-me" element={<AboutMe />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
			</main>

			<footer className="App-footer">
				<p>&copy; {new Date().getFullYear()} Colin. All rights reserved.</p>
			</footer>
		</div>
		</Router>
	);
};

export default App;
