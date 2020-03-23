import React from 'react';
import { useRouter } from "next/router";

const Project = ({ image, title, description, github }) => {

  const router = useRouter();

  const redirectTo = (url) => {
    if (url !== undefined) {
      router.push({
        pathname: url
      });
    }
  };

  return (
    <div className="project_card">
      <img src={image} />
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project_social">
          {github !== undefined ? <a href={github}>
            <i style={{ color: "#20f888", cursor: "pointer" }} className="fi-xnsux2-github-alt" />
          </a> : null}
        </div>
      </div>
    </div>
  );
}

export default Project;