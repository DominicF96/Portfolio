import React from "react";
import { useRouter } from "next/router";

const Project = ({ image, title, description, github, website }) => {
  const router = useRouter();

  const redirectTo = (url) => {
    if (url !== undefined) {
      router.push({
        pathname: url,
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
          {website !== undefined ? (
            <a href={website}>
              <i
                style={{ color: "#20f888", cursor: "pointer" }}
                className="fas fa-globe fa-2x"
              />
            </a>
          ) : null}
          {github !== undefined ? (
            <a href={github}>
              <i
                style={{ color: "#20f888", cursor: "pointer" }}
                className="fab fa-github fa-2x"
              />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
