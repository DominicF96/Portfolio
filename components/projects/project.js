import React from 'react';

const Project = ({ image, title, description }) => {
  return (
    <div className="project_card">
      <img src={image} />
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;