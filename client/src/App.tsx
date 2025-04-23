import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      fetch(`${import.meta.env.VITE_API_URL}/api/users/1`)
        .then((response) => {
          if (response.ok) {
            navigate("/profil/1");
          } else {
            navigate("/Creation_profil");
          }
        })
        .catch(() => navigate("/Creation_profil"))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [navigate, location.pathname]);

  if (loading) {
    return <p>Chargement...</p>;
  }

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
