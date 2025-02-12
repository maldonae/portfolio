import type { ReactNode } from "react";

export type ExperienceType = {
  organisation: string;
  poste: string;
  content: string;
};

interface CreaExperienceType {
  children?: ReactNode;
  defaultValue: ExperienceType;
  onSubmit: (experience: ExperienceType) => void;
}

function NewExperienceForm({
  children,
  defaultValue,
  onSubmit,
}: CreaExperienceType) {
  return (
    <section className="create-experience-container">
      <h1>Ajouter une expérience</h1>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);

          const organisation = formData.get("organisation") as string;
          const poste = formData.get("poste") as string;
          const content = formData.get("content") as string;

          if (!organisation || !poste || !content) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
          }

          onSubmit({ organisation, poste, content });

          alert("Expérience ajoutée avec succès !");
        }}
      >
        <label className="form-fields" htmlFor="organisation">
          Organisation *
        </label>
        <input
          className="form-fields"
          id="organisation"
          type="text"
          name="organisation"
          placeholder="Entrez votre société"
          defaultValue={defaultValue.organisation}
          required
        />

        <label className="form-fields" htmlFor="poste">
          Poste *
        </label>
        <input
          className="form-fields"
          id="poste"
          type="text"
          name="poste"
          placeholder="Entrez votre poste"
          defaultValue={defaultValue.poste}
          required
        />

        <label className="form-fields" htmlFor="content">
          Descriptif *
        </label>
        <input
          className="form-fields"
          id="content"
          type="text"
          name="content"
          placeholder="Décrivez le poste occupé"
          defaultValue={defaultValue.content}
          required
        />

        <button type="submit" className="create-experience-button">
          {children} AJOUTER UNE EXPÉRIENCE
        </button>
      </form>
    </section>
  );
}

export default NewExperienceForm;
