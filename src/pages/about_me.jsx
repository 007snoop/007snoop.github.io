import React from "react";

const AboutMe = () => {
	return (
		<section id="about-me" className="about-section">
			<div className="about-me-container">
				<button
					className="about-me-button"
					onClick={() => {
						const text = document.querySelector(".about-me-text");
						text.classList.toggle("visible")
					}}>
					About Me
				</button>
				<div className="about-me-text">
					Hi, I’m Colin, also known as 30k, 007snoop, and Saint Celestine.
					<br></br>
					I’m a software development student with a passion for coding,
					creativity, and crafting unique applications. I love blending
					technical skills with inspiration from my hobbies, including guitar
					and gaming, to create solutions that stand out.<br></br>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
