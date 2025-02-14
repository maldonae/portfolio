import { useNavigate, useParams } from "react-router-dom";
import "./DeleteProjet.css";

function DeleteProjet() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre projet ? Cette action est irréversible.",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projets/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.ok) {
        alert("Votre projet a été supprimé.");
        navigate("/projets", { state: { deleted: true } }); // Envoi du state
      } else {
        throw new Error("Erreur lors de la suppression du projet.");
      }
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Une erreur est survenue.",
      );
    }
  };

  return (
    <section className="delete-projet-container">
      <h1>SUPPRIMER MON PROJET</h1>
      <p>Êtes-vous sûr·e de supprimer votre projet ? </p>
      <button onClick={handleDelete} className="delete-button" type="button">
        Oui, supprimer mon projet
      </button>
    </section>
  );
}

export default DeleteProjet;
