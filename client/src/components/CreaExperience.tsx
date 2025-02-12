import { useNavigate } from "react-router-dom";
import NewExperienceForm from "./NewExperienceForm";

function CreaExperience() {
  const navigate = useNavigate();

  // Objet contenant les valeurs par défaut du formulaire
  const newExperience = {
    organisation: "",
    poste: "",
    content: "",
  };

  return (
    //insertion du composant enfant qui gère le formulaire
    <NewExperienceForm
      defaultValue={newExperience}
      onSubmit={(experienceData) => {
        // Envoi des données du formulaire à l'API pour créer une nouvelle expérience
        fetch(`${import.meta.env.VITE_API_URL}/api/experiences`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experienceData),
        })
          .then((response) => {
            if (response.status === 403) {
              alert("Vérifiez les informations saisies !");
            } else {
              return response.json();
            }
          })
          // si le formulaire est bien rempli, renvoit à la page création
          .then(() => {
            navigate("/experiences");
          });
      }}
    />
  );
}

export default CreaExperience;
