import Head from 'next/head'
import Nav from '../components/nav';
import Catchphrase from '../components/catchphrase'
import Presentation from '../components/presentation';
import Knowledge from '../components/knowledge';
import "../stylesheets/index.scss";
import Projects from '../components/project';

const Home = () => (
  <div className="container">
    <Head>
      <title>Dominic Fournier | Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <script src="https://kit.fontawesome.com/7dd45aaf72.js" crossorigin="anonymous"></script>
    </Head>

    <main>
      <Nav/>
      <Catchphrase/>
      <Knowledge/>
      <Presentation/>
      {/* <Projects/> */}
      <div className="angled_square_1"/>
      <div className="angled_square_2"/>
    </main>
  </div>
)

export default Home
