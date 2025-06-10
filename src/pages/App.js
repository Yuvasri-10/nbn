import '../styles/global.css'; 

function App() {
  return (
    <div className="App">
      <header>
        <h1>AceIt</h1>
        <p>Your Monthly Productivity Tracker</p>
        <nav>
          <a href="#tracker">Tracker</a>
          <a href="#services">Planner</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="tip">
        <ProductivityTip />
      </section>

      <section id="planner">
        <MonthlyPlanner />
      </section>

      <section id="tracker">
        <Tracker />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <p>&copy; 2025 AceIt &nbsp;|&nbsp; Stay productive!</p>
      </footer>
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
