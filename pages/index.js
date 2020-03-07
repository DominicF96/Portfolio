import Head from 'next/head';
import "../styles/home.scss";

const Home = () => {

  return (
    <div className="container">
      <Head>
        <title>Dominic Fournier | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"></meta>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description"
          content="Im an engineering student from Canada working as a Full Stack developer since almost 2 years. Here's my portfolio." />
        <meta property="og:title" content="Dominic Fournier | Portfolio" />
        <meta property="og:description"
          content="Im an engineering student from Canada working as a Full Stack developer since almost 2 years. Here's my portfolio." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:alt" content="Site Preview" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:site_name" content="Dominic Fournier | Portfolio" />
        <script defer src="https://friconix.com/cdn/friconix.js"> </script>
      </Head>
      <main id="language_selection">
        <div className="v_center">
          <div className="line_design ld_1" />
          <div style={{ position: "relative", zIndex: "300" }}>
            <a href="/fr">FR</a>&nbsp;/&nbsp;<a href="/en">EN</a>
          </div>
          <div className="line_design ld_2" />
        </div>
        <div className="angled_square_1" />
        <div className="angled_square_2" />
        <div className="angled_square_3" />
        <footer id="simple_footer">
          &copy; Dominic Fournier 2020, Tout droits réservés.
      </footer>
      </main>

    </div>
  )
}

export default Home
