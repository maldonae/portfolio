import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="logo">Bienvenu</h1>
      </header>
      <Outlet />
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
