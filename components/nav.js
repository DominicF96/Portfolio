import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";

const Nav = () => {

  const router = useRouter();

  const [lang, setLang] = useState("fr");

  useEffect(() => {
    if (router.query.lang !== lang) {
      setLang(router.query.lang);
    }
  }, [router.query.lang]);

  return (
    <div id="nav">
      <div>Dominic Fournier</div>
      <div>
        <a href="mailto:dominicfournier@outlook.com"><i className="fi-xnsuxl-envelope-text-solid" /></a>
        <a target="_blank" href={`/files/CV_Dominic_Fournier2020_${lang}.pdf`}><i className="fi-xnsuxl-file-solid" /></a>
        <a target="_blank" href="https://github.com/DominicF96"><i className="fi-xnsuxl-github" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/dominic-fournier-1b068212a/"><i className="fi-cnsuxl-linkedin" /></a>
      </div>
    </div>
  );
}

export default Nav;