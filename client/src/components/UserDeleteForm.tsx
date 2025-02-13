import { useNavigate } from "react-router-dom";

type UserDeleteFormProps = {
  id?: number; // L'ID peut être undefined si mal récupéré
  onDelete?: () => void; // Fonction à exécuter après suppression
};

function UserDeleteForm({ id, onDelete }: UserDeleteFormProps) {
  const navigate = useNavigate();

  const handleDelete = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!id) {
      alert("Erreur : impossible de récupérer votre ID utilisateur.");
      return;
    }

    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer votre profil ?",
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
        alert("Votre profil a été supprimé avec succès.");
        if (onDelete) onDelete(); // Exécuter l'action personnalisée après suppression
        navigate("/"); // Redirection vers l'accueil
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
    <form className="delete-form" onSubmit={(event) => event.preventDefault()}>
      <button
        type="button"
        className="delete-profil-button"
        onClick={handleDelete}
      >
        Supprimer mon compte
      </button>
    </form>
  );
}

export default UserDeleteForm;
