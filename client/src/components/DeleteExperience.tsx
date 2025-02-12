import { useNavigate, useParams } from "react-router-dom";

function DeleteExperience() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre expérience ? Cette action est irréversible.",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/experiences/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.ok) {
        alert("Votre expérience a été supprimée.");
        navigate("/experiences", { state: { deleted: true } }); // Envoi du state
      } else {
        throw new Error("Erreur lors de la suppression de l'expérience.");
      }
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Une erreur est survenue.",
      );
    }
  };

  return (
    <section className="delete-experience-container">
      <h1>SUPPRIMER MON EXPERIENCE</h1>
      <p>Êtes-vous sûr·e de supprimer votre expérience ? </p>
      <button onClick={handleDelete} className="delete-button" type="button">
        Oui, supprimer mon expérience
      </button>
    </section>
  );
}

export default DeleteExperience;
