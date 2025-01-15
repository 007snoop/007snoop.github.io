import React from 'react';

const Skills = ()  => {
    return (
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
                    <li>Node</li>
                    <li>Python</li>
                    <li>Lua</li>
                </ul>
            </div>
        </div>
    </section>

    )
};

export default Skills;