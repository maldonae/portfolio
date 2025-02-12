import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="logo">JS Monorepo</h1>
      </header>

      <main className="text-box">
        <hgroup className="block-primary">
          <h2 className="block-primary-main">JS Monorepo</h2>
          <p className="block-primary-sub">Votre framework JavaScript</p>
        </hgroup>
        <p>Vous avez lu le README ?</p>
      </main>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </>
  );
}

export default App;
