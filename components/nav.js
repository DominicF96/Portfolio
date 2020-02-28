import React from 'react';
 
const Nav = () => {
  return (
    <div id="nav">
      <div>Dominic Fournier</div>
      <div>
        <a href="mailto:dominicfournier@outlook.com"><i className="fas fa-2x fa-envelope-open-text"/></a>
        <a target="_blank" href="/files/CV_Dominic_Fournier2020.pdf"><i className="fa fa-2x fa-file-invoice"/></a>
        <a target="_blank" href="https://github.com/DominicF96"><i className="fab fa-2x fa-github-square"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/dominic-fournier-1b068212a/"><i className="fab fa-2x fa-linkedin"/></a>
      </div>
    </div>
  );
}
 
export default Nav;