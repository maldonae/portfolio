import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ProjetType {
  id: number;
  title: string;
  descript: string;
  nameofteam: string;
  picture: string;
}

function Projet() {
  const [projets, setProjets] = useState<ProjetType[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/projets`)
      .then((response) => response.json())
      .then((data: ProjetType[]) => {
        setProjets(data);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des projets:", error),
      );
  }, []);

  if (!projets) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <h1 className="h1_projet">Projet</h1>

      <div className="experience_div">
        {projets.map((projet) => (
          <section className="Projets" key={projet.id}>
            <ul className="list-projet">
              <li>
                <button
                  type="button"
                  className="add-button"
                  onClick={() => navigate("/Creation_projet")}
                >
                  Ajouter un projet
                </button>
              </li>
              <li id="projet_title" aria-label="projet_title">
                {projet.title}
              </li>

              <li id="descript" aria-label="descript">
                {projet.descript}
              </li>
              <li id="nameofteam" aria-label="nameofteam">
                {projet.nameofteam}
              </li>
              <img
                className="img-knight"
                src={`${import.meta.env.VITE_API_URL}/assets/images/${projet.picture}`}
                alt={projet.picture}
              />
              <section className="container-button">
                <li>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => navigate(`/Suppression_projet/${projet.id}`)}
                  >
                    Supprimer
                  </button>
                </li>
              </section>
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

export default Projet;
