import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <h1 className="logo">Bienvenu</h1>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
