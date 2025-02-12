import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
