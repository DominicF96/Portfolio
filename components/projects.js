import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      {/* <h1>Projects</h1> */}
      <h1>Projets</h1>

      <div className="project_card">
        <img src="/images/test.jpg" />
        <div className="description">
          <h3>Projet A</h3>
          <p>Bientôt...</p>
        </div>
      </div>

      <div className="line_design ld_2" />

      <div className="project_card">
        <img src="/images/test.jpg" />
        <div className="description">
          <h3>Projet B</h3>
          <p>Bientôt...</p>
        </div>
      </div>

      <div className="line_design ld_1" />
      <div style={{height: "1em"}}/>

      <div className="project_card">
        <img src="/images/test.jpg" />
        <div className="description">
          <h3>Projet C</h3>
          <p>Bientôt...</p>
        </div>
      </div>

      <div className="line_design ld_2" />
    </section>
  );
}

export default Projects;