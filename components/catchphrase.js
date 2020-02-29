import React from 'react';

const Catchphrase = () => {
  return (
    <section id="catchphrase">
      {/* Hello! */}
      <h1>Salut!</h1>
      {/* I'm a Software Developer */}
      <h2>Je suis développeur logiciel
        <div>
          {/* Building */}
          Je conçoit&nbsp;
          {/* <span className="text-highlight cp1">the web<div className="bg" /></span>
          <span className="text-highlight cp2">games<div className="bg" /></span>
          <span className="text-highlight cp3">an engineering stack<div className="bg" /></span>
          <span className="text-highlight cp4">courses<div className="bg" /></span>
          <span className="text-highlight cp5">skills<div className="bg" /></span> */}
          <span className="text-highlight cp1">des applications web<div className="bg" /></span>
          <span className="text-highlight cp2">des jeux<div className="bg" /></span>
          <span className="text-highlight cp3">une suite logicielle pour développeurs<div className="bg" /></span>
          <span className="text-highlight cp4">des cours<div className="bg" /></span>
          <span className="text-highlight cp5">le tout en améliorant mes capacités<div className="bg" /></span>
        </div>
      </h2>
    </section>
  );
}

export default Catchphrase;