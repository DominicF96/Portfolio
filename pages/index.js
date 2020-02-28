import Head from 'next/head'
import Nav from '../components/nav';
import Catchphrase from '../components/catchphrase'
import Presentation from '../components/presentation';
import Knowledge from '../components/knowledge';
import "../stylesheets/index.scss";

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
      <div className="line_design ld_1" />
      <div className="line_design ld_2" />
      <div className="line_design ld_3" />
      {/* <Presentation/> */}
      <Knowledge/>
      <section id="projects"></section>
      
      <div className="angled_square_1"/>
      <div className="angled_square_2"/>
      <div className="angled_square_2"/>
    </main>

    <footer>

    </footer>
  </div>
)

export default Home
