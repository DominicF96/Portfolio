import Head from "next/head";
import Nav from "../../components/nav";
import Catchphrase from "../../components/catchphrase";
import Knowledge from "../../components/knowledge";
import Projects from "../../components/projects/projects";
import "../../styles/index.scss";
import Button from "../../components/Button";
const axios = require("axios");

const Portfolio = ({ dict }) => {
  return (
    <div className="container">
      <Head>
        <title>Dominic Fournier | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        ></meta>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="description"
          content="Im an engineering student from Canada working as a Full Stack developer since almost 2 years. Here's my portfolio."
        />
        <meta property="og:title" content="Dominic Fournier | Portfolio" />
        <meta
          property="og:description"
          content="Im an engineering student from Canada working as a Full Stack developer since almost 2 years. Here's my portfolio."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="Personal Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:site_name" content="Dominic Fournier | Portfolio" />
        <script async src="https://kit.fontawesome.com/7dd45aaf72.js" crossOrigin="anonymous"></script>
      </Head>
      <main>
        <Button id="contact_me" onClick={() => { window.location = "mailto:me@dominicfournier.com" }}><i className="fas fa-envelope" />&nbsp;{dict.contact_me}</Button>
        <Nav dict={dict.nav} />
        <Catchphrase dict={dict.catchphrase} />
        <div className="line_design ld_2" />
        <Knowledge dict={dict.knowledge} />
        <div className="card">{dict.quotes.student_work_experience}</div>
        <div className="card" style={{ textAlign: "right" }}>{dict.quotes.passion_building_soft}</div>
        <div className="line_design ld_1" />
        <div className="card">{dict.quotes.creativity_is_a_must}</div>
        <Projects dict={dict.projects} />
        <div className="angled_square_1" />
        <div className="angled_square_2" />
        <div className="angled_square_3" />
      </main>

      <footer>
        <div className="links">
          <a href="mailto:me@dominicfournier.com">
            <i className="fas fa-envelope" />
          </a>
          <a target="_blank" href={`/files/CV_Dominic_Fournier2020_${dict.lang}.pdf`}>
            <i className="fas fa-id-card" />
          </a>
          <a target="_blank" href="https://github.com/DominicF96">
            <i className="fab fa-github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dominic-fournier-1b068212a/"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>
            &copy; Dominic Fournier 2020, {dict.footer.rights_reserved}
      </footer>
    </div>
  );
};

Portfolio.getInitialProps = async ctx => {
  const { lang } = ctx.query;
  const { req } = ctx;

  const protocol = req
    ? `${req.headers["x-forwarded-proto"]}:`
    : location.protocol;
  const host = req ? req.headers["x-forwarded-host"] : location.host;
  let env = process.env.NODE_ENV;
  console.log(`Initializing ${env}.`);
  const res = await axios.post(env === "development" ? `http://localhost:3000/api/dictionnary` : `${protocol}//${host}/api/dictionnary`, {
    lang
  });
  return { dict: res.data };
};

export default Portfolio;
