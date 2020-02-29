import Head from 'next/head';
import Nav from '../components/nav';
import Catchphrase from '../components/catchphrase';
import Knowledge from '../components/knowledge';
import Projects from '../components/projects';
import "../styles/index.scss";

const Home = () => {

  const logTrashTalk = () => {
    console.log("⠄⠄⠄⢀⣤⣾⣿⡟⠋⠄⠄⠄⣀⡿⠄⠊⠄⠄⠄⠄⠄⠄⢸⠇⠄⢀⠃⠙⣿⣿\n" +
      "⣤⠒⠛⠛⠛⠛⠛⠛⠉⠉⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠸⠄⢀⠊⠄⠄⠈⢿ \n" +
      "⣿⣠⠤⠴⠶⠒⠶⠶⠤⠤⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠃⠄⠂⣀⣀⣀⡀⠄ \n" +
      "⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠙⠂⠄⠄⠄⠄⠄⠄⢀⢎⠐⠛⠋⠉⠉⠉⠉⠛\n" +
      "⡇⠄⠄⠄⣀⡀⠄⠄⠄⢀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠎⠁⠄⠄⠄⠄⠄⠄⠄⠄\n" +
      "⡧⠶⣿⣿⣿⣿⣿⣿⠲⠦⣭⡃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⡀⠄⠄⠄⠄⠄⠄\n" +
      "⡇⠄⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣾⣿⣿⣿⡟⠛⠶⠄\n" +
      "⡇⠄⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⣿⣿⣿⣿⡇⠄⠄⢀\n" +
      "⡇⠄⢿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣿⣿⣿⣿⣿⡇⠄⠄⢊\n" +
      "⢠⠄⠈⠛⠛⠛⠛⠋⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿⣿⡦⠁⠄⠄⣼\n" +
      "⢸⠄⠈⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠉⠄⠄⠄⠄⢰⣿\n" +
      "⢸⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠁⠉⠄⢸⣿\n" +
      "⠄⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿\n" +
      "⠄⢿⣷⣶⣄⡀⠄⠄⠄⠄⠄⠄⠉⠉⠉⠉⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣴⣿⣿\n" +
      "⠄⢸⣿⣿⣿⣿⣷⣦⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣿⣿⣿⣿⣿\n" +
      "\n\nI see you over there judging me...\n\n\n");
  }

  return (
    <div className="container">
      <Head>
        <title>Dominic Fournier | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="https://friconix.com/cdn/friconix.js"> </script>
      </Head>
      <main>
        {logTrashTalk()}
        <Nav />
        <Catchphrase />
        <div className="line_design ld_2" />
        <div className="card">Third year software engineering student with almost 2 years of professional experience as a Full Stack Developer.</div>
        <Knowledge />
        <div className="card" style={{ paddingTop: "0", textAlign: "right" }}>Developing time-saving tools and interfaces while experimenting with new frameworks and librairies is my hobby.</div>
        <div className="line_design ld_1" />
        <Projects />
        <div className="angled_square_1" />
        <div className="angled_square_2" />
        <div className="angled_square_3" />
      </main>
      <footer>
        &copy; Dominic Fournier 2020, All Rights Reserved.
        <div className="links">
        <a href="mailto:dominicfournier@outlook.com"><i className="fi-xnsuxl-envelope-text-solid"/></a>
        <a target="_blank" href="/files/CV_Dominic_Fournier2020.pdf"><i className="fi-xnsuxl-file-solid"/></a>
        <a target="_blank" href="https://github.com/DominicF96"><i className="fi-xnsuxl-github"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/dominic-fournier-1b068212a/"><i className="fi-cnsuxl-linkedin"/></a>
      </div>
      </footer>
    </div>
  )
}

export default Home
