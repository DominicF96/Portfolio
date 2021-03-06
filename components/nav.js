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
        <a style={{color: "#20f888", padding: "0 0.4em", fontSize: "1.2em" }} href={lang === "fr" ? "/en" : "/fr"}>{lang === "fr" ? "EN" : "FR"}</a>
        <a href="mailto:me@dominicfournier.com"><i className="fas fa-envelope" /></a>
        <a target="_blank" href={`/files/CV_Dominic_Fournier2020_${lang}.pdf`}><i className="fas fa-id-card" /></a>
        <a target="_blank" href="https://github.com/DominicF96"><i className="fab fa-github" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/dominic-fournier-1b068212a/"><i className="fab fa-linkedin" /></a>
      </div>
    </div>
  );
}

export default Nav;