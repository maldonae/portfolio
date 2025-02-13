import { useNavigate, useParams } from "react-router-dom";

function DeleteProfil() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    if (!id) return;

    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre profil ? Cette action est irréversible.",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.ok) {
        alert("Votre profil a été supprimé.");
        navigate("/", { state: { deleted: true } }); // Envoi du state
      } else {
        throw new Error("Erreur lors de la suppression du profil.");
      }
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Une erreur est survenue.",
      );
    }
  };

  return (
    <section className="delete-account-container">
      <h1>SUPPRIMER MON PROFIL</h1>
      <p>Êtes-vous sûr·e de supprimer votre profil ? </p>
      <button onClick={handleDelete} className="delete-button" type="button">
        Oui, supprimer mon profil
      </button>
    </section>
  );
}

export default DeleteProfil;
