import React, {useEffect, useState}from "react";
import "./main.css";


const App = () => {
  const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show button if scrolled more than 100px
			if (window.scrollY > 50) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<nav className="navbar">
					<ul className="navbar-links">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
				<h1>Welcome to My Portfolio</h1>
			</header>

			<main>
				{/* Home Section */}
				<section id="home" className="home-section">
					<div className="about-me-container">
						<button
							className="about-me-button"
							onClick={() => {
								const text = document.querySelector(".about-me-text");
								text.style.display =
									text.style.display === "block" ? "none" : "block";
							}}
						>
							About Me
						</button>
						<div className="about-me-text">
							Hi, I’m Colin, also known as 30k, 007snoop, and Saint Celestine.
							<br></br>
							I’m a software development student with a passion for coding,
							creativity, and crafting unique applications. I love blending
							technical skills with inspiration from my hobbies, including
							guitar and gaming, to create solutions that stand out.<br></br>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section id="projects" className="projects-section">
					<h2>My Projects</h2>
					<div className="project-list">
						<div className="project-card">
							<h3>Project Title</h3>
							<p>Short description of the project.</p>
							<a
								href="https://github.com/your-repo"
								target="_blank"
								rel="noopener noreferrer"
							>
								View on GitHub
							</a>
						</div>
						{/* Add more project cards as needed */}
					</div>
				</section>

				{/* Skills Section */}
				<section id="skills" className="skills-section">
					<div className="skills-container">
						<button
							className="skills-button"
							onClick={() => {
								const text = document.querySelector(".skills-text");
								text.style.display =
									text.style.display === "block" ? "none" : "block";
							}}
						>
							Skills
						</button>
						<div className="skills-text">
							<ul>
								<li>JavaScript</li>
								<li>React</li>
								<li>CSS</li>
								<li>HTML</li>
								<li>Reactjs</li>
								<li>Node</li>
								<li>Python</li>
								<li>Lua</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="contact-section">
					<h2>Contact Me</h2>
					<form className="contact-form">
						<label>
							Name:
							<input type="text" name="name" required />
						</label>
						<label>
							Email:
							<input type="email" name="email" required />
						</label>
						<label>
							Message:
							<textarea name="message" required></textarea>
						</label>
						<button type="submit">Send</button>
					</form>
				</section>
				{showButton && ( <button id="backToTop" class="back-to-top" onClick={scrollToTop}>Back to Top
				</button>)}
			</main>

			<footer className="App-footer">
				<p>&copy; {new Date().getFullYear()} Colin. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default App;
