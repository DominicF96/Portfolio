import React from 'react';

const Projects = ({ dict }) => {
  return (
    <section id="projects">
      <h1>{dict.projects}</h1>

      <div className="project_card">
        <img src="/images/test.jpg" />
        <div className="description">
          <h3>{dict.project} A</h3>
          <p>{dict.soon}</p>
        </div>
      </div>

      <div className="line_design ld_2" />

      <div className="project_card">
        <img src="/images/test.jpg" />
        <div className="description">
          <h3>{dict.project} B</h3>
          <p>{dict.soon}</p>
        </div>
      </div>

      <div className="line_design ld_1" />
      <div style={{ height: "1em" }} />

      <div className="project_card">
        <img src="/images/test.jpg" />
        <div className="description">
          <h3>{dict.project} C</h3>
          <p>{dict.soon}</p>
        </div>
      </div>

      <div className="line_design ld_2" />
    </section>
  );
}

export default Projects;