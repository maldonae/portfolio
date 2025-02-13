import { useNavigate } from "react-router-dom";
import NewProjetForm from "./NewProjetForm";

// Interface définissant les données d'un projet à soumettre
interface ProjetData {
  title: string;
  descript: string;
  nameofteam: string;
  picture: File | null;
  user_id: number;
}

function CreaProjet() {
  const navigate = useNavigate();

  // Objet contenant les valeurs initiales du formulaire
  const newProjet: ProjetData = {
    title: "",
    descript: "",
    nameofteam: "",
    picture: null,
    user_id: 1, // Ajout de user_id par défaut
  };

  // Fonction déclenchée lors de la soumission du formulaire
  const handleSubmit = (projetData: ProjetData) => {
    const formData = new FormData();

    formData.append("title", projetData.title);
    formData.append("descript", projetData.descript);
    formData.append("nameofteam", projetData.nameofteam);
    formData.append("user_id", String(projetData.user_id)); // Convertir en string

    if (projetData.picture) {
      formData.append("picture", projetData.picture);
    }

    // Envoi des données à l'API via une requête POST (add BREAD)
    fetch(`${import.meta.env.VITE_API_URL}/api/projets`, {
      method: "POST",
      body: formData, // Pas besoin d'ajouter Content-Type avec FormData
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi du projet");
        }
        return response.json();
      })
      .then(() => {
        navigate("/projets");
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du projet :", error);
      });
  };

  return (
    <div>
      {/* Formulaire de soumission du projet, appelé en tant que composant */}
      <NewProjetForm
        defaultValue={{
          ...newProjet,
          picture: newProjet.picture ?? new File([], ""), // 🔥 Assure que picture n'est jamais null
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default CreaProjet;
