import Head from "next/head";
import Nav from "../../components/nav";
import Catchphrase from "../../components/catchphrase";
import Knowledge from "../../components/knowledge";
import Projects from "../../components/projects/projects";
import "../../styles/index.scss";
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
        <script defer src="https://friconix.com/cdn/friconix.js">
          {" "}
        </script>
      </Head>
      <main>
        <Nav dict={dict.nav} />
        <Catchphrase dict={dict.catchphrase} />
        <div className="line_design ld_2" />
        <div className="card">{dict.quotes.student_work_experience}</div>
        <Knowledge dict={dict.knowledge} />
        <div className="card" style={{ paddingTop: "0", textAlign: "right" }}>
          {dict.quotes.passion_building_soft}
        </div>
        <div className="line_design ld_1" />
        <Projects dict={dict.projects} />
        <div className="angled_square_1" />
        <div className="angled_square_2" />
        <div className="angled_square_3" />
      </main>
      <footer>
        &copy; Dominic Fournier 2020, {dict.footer.rights_reserved}
        <div className="links">
          <a href="mailto:me@dominicfournier.com">
            <i className="fi-xnsuxl-envelope-text-solid" />
          </a>
          <a target="_blank" href="/files/CV_Dominic_Fournier2020.pdf">
            <i className="fi-xnsuxl-file-solid" />
          </a>
          <a target="_blank" href="https://github.com/DominicF96">
            <i className="fi-xnsuxl-github" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dominic-fournier-1b068212a/"
          >
            <i className="fi-cnsuxl-linkedin" />
          </a>
        </div>
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

  const res = await axios.post(`${protocol}//${host}/api/dictionnary`, {
    lang
  });
  return { dict: res.data };
};

export default Portfolio;
