import React from 'react';
import Project from "./project";

const Projects = ({ dict }) => {
  return (
    <section id="projects">
      <h1>{dict.projects}</h1>

      <Project image="/images/test.jpg" title={`${dict.project} A`} description={dict.soon} />

      <div className="line_design ld_2" />

      <Project image="/images/test.jpg" title={`${dict.project} B`} description={dict.soon} />

      <div className="line_design ld_1" />
      <div style={{ height: "1em" }} />

      <Project image="/images/test.jpg" title={`${dict.project} C`} description={dict.soon} />

      <div className="line_design ld_2" />
    </section>
  );
}

export default Projects;