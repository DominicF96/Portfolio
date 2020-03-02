import React from 'react';

const Catchphrase = ({ dict }) => {
  return (
    <section id="catchphrase">
      <h1>{dict.hello}</h1>
      <h2>{dict.i_am_a_soft_dev}
        <div>
          {dict.building}&nbsp;
          <span className="text-highlight cp1">{dict.the_web}<div className="bg" /></span>
          <span className="text-highlight cp2">{dict.games}<div className="bg" /></span>
          <span className="text-highlight cp3">{dict.engineering_stack}<div className="bg" /></span>
          <span className="text-highlight cp4">{dict.courses}<div className="bg" /></span>
          <span className="text-highlight cp5">{dict.skills}<div className="bg" /></span>
        </div>
      </h2>
    </section>
  );
}

export default Catchphrase;