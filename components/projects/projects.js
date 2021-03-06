import React from 'react';
import Project from "./project";

const Projects = ({ dict }) => {
  return (
    <section id="projects">
      <h1>{dict.projects}</h1>
      {dict.list.map((project) => {
        return <Project image={project.image} title={`${project.name}`} description={project.description} github={project.github} website={project.website} />
      })}

      <div className="line_design ld_2" />
    </section>
  );
}

export default Projects;