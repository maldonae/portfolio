import type { ReactNode } from "react";
import "./EditExperienceForm.css";

type Experience = {
  organisation: string;
  poste: string;
  content: string;
};

interface ExperienceFormProps {
  children: ReactNode;
  extraButton?: ReactNode;
  defaultValue: Experience;
  onSubmit: (experience: Experience) => void;
}

function EditExperienceForm({
  children,
  defaultValue,
  onSubmit,
}: ExperienceFormProps) {
  return (
    <section className="update-experience-container">
      <h1>MODIFIER MON EXPERIENCE</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          onSubmit({
            organisation: formData.get("organisation") as string,
            poste: formData.get("poste") as string,
            content: formData.get("content") as string,
          });
        }}
      >
        <label className="updateForm-fields">
          Organisation:
          <input
            type="text"
            name="organisation"
            defaultValue={defaultValue.organisation}
            required
          />
        </label>
        <label className="updateForm-fields">
          Poste:
          <input
            type="text"
            name="poste"
            defaultValue={defaultValue.poste}
            required
          />
        </label>
        <label className="updateForm-fields">
          Descriptif du poste:
          <input
            type="text"
            name="content"
            defaultValue={defaultValue.content}
            required
          />
        </label>
        <section className="button-modifier-EditForm">
        <button type="submit" className="update-experience-button">
          {children}
        </button>
        </section>
      </form>
    </section>
  );
}
export default EditExperienceForm;
