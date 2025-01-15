import React from "react";
 
const Projects = () => {
    return (
        <section id="projects" className="projects-section">
					<h2>My Projects</h2>
					<div className="project-list">
						<div className="project-card">
							<h3>SDCCL</h3>
							<p>Steam Deck Comprehensive Control Layouts</p>
							<a
								href="https://github.com/007snoop/SDCCL"
								target="_blank"
								rel="SDCCL"
							>
								View on GitHub
							</a>
						</div>
						{/* Add more project cards as needed */}
					</div>
				</section>
    )
};

export default Projects;