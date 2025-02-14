import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Experience.css";

interface Experience {
  id: number;
  organisation: string;
  poste: string;
  content: string;
}

function Experience() {
  const [experiences, setExperiences] = useState<Experience[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/experiences`)
      .then((response) => response.json())
      .then((data: Experience[]) => {
        setExperiences(data);
        if (data.length === 0) {
          navigate("/Creation_experience");
        }
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des expériences:", error),
      );
  }, [navigate]);

  if (!experiences) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <h1 className="h1_experience">Expériences</h1>

      <div className="experience_div">
        {experiences.map((experience) => (
          <section className="Experiences" key={experience.id}>
            <ul className="list-experience">
              <li>
                <button
                  type="button"
                  className="add-button"
                  onClick={() => navigate("/Creation_experience")}
                >
                  Ajouter une expérience
                </button>
              </li>
              <li
                id="experience_organisation"
                aria-label="experience_organisation"
              >
                {experience.organisation}
              </li>

              <li id="poste" aria-label="poste">
                {experience.poste}
              </li>
              <li id="content" aria-label="descriptif">
                {experience.content}
              </li>
              <section className="container-button">
                <li>
                  <button
                    type="button"
                    className="edit-button"
                    onClick={() =>
                      navigate(`/Modification_experience/${experience.id}`)
                    }
                  >
                    Modifier
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() =>
                      navigate(`/Suppression_experience/${experience.id}`)
                    }
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

export default Experience;
