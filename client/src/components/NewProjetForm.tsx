import type { ReactNode } from "react";

export type ProjetType = {
  title: string;
  descript: string;
  nameofteam: string;
  picture: File;
  user_id: number;
};

interface CreaProjetType {
  children?: ReactNode;
  defaultValue: ProjetType;
  onSubmit: (projet: ProjetType) => void;
}

function NewProjetForm({ children, defaultValue, onSubmit }: CreaProjetType) {
  return (
    <section className="create-projet-container">
      <h1>Ajouter un projet</h1>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const title = formData.get("title") as string;
          const descript = formData.get("descript") as string;
          const nameofteam = formData.get("nameofteam") as string;
          const user_id = defaultValue.user_id; // Récupération correcte de user_id

          // 🔥 Correction de la gestion du fichier
          const fileInput = event.currentTarget.querySelector(
            'input[type="file"]',
          ) as HTMLInputElement;
          const picture = fileInput.files?.[0] ?? new File([], ""); // Sécurisation du fichier

          if (!title || !descript || !nameofteam || picture.size === 0) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
          }

          onSubmit({
            title,
            descript,
            nameofteam,
            picture,
            user_id, //Envoi correct de user_id
          });

          alert("Projet ajouté avec succès !");
        }}
      >
        <label className="form-fields" htmlFor="title">
          Titre *
        </label>
        <input
          className="form-fields"
          id="title"
          type="text"
          name="title"
          placeholder="Entrez le nom de votre projet"
          defaultValue={defaultValue.title}
          required
        />

        <label className="form-fields" htmlFor="descript">
          Descriptif du projet *
        </label>
        <input
          className="form-fields"
          id="descript"
          type="text"
          name="descript"
          placeholder="Entrez le descriptif du projet"
          defaultValue={defaultValue.descript}
          required
        />

        <label className="form-fields" htmlFor="nameofteam">
          Participants *
        </label>
        <input
          className="form-fields"
          id="nameofteam"
          type="text"
          name="nameofteam"
          placeholder="Citez les participants"
          defaultValue={defaultValue.nameofteam}
          required
        />

        <label htmlFor="photo">AJOUTER PHOTO DU PROJET *</label>
        <input type="file" name="picture" />

        <section className="add-button-form">
          <button type="submit" className="create-experience-button">
            {children} AJOUTER UN PROJET
          </button>
        </section>
      </form>
    </section>
  );
}

export default NewProjetForm;
