import type { ReactNode } from "react";
import "./EditUserForm.css";

type User = {
  firstname: string;
  lastname: string;
  metier: string;
  email: string;
  github: string;
  linkedin: string;
};

interface UserFormProps {
  children: ReactNode;
  extraButton?: ReactNode;
  defaultValue: User;
  onSubmit: (user: User) => void;
}

function EditUserForm({ children, defaultValue, onSubmit }: UserFormProps) {
  return (
    <section className="update-profil-container">
      <h1>MODIFIER MON PROFIL</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          onSubmit({
            firstname: formData.get("firstname") as string,
            lastname: formData.get("lastname") as string,
            metier: formData.get("metier") as string,
            email: formData.get("email") as string,
            github: formData.get("github") as string,
            linkedin: formData.get("linkedin") as string,
          });
        }}
      >
        <label className="updateForm-fields">
          Prénom:
          <input
            type="text"
            name="firstname"
            defaultValue={defaultValue.firstname}
            required
          />
        </label>
        <label className="updateForm-fields">
          Nom de famille:
          <input
            type="text"
            name="lastname"
            defaultValue={defaultValue.lastname}
            required
          />
        </label>
        <label className="updateForm-fields">
          Métier:
          <input
            type="text"
            name="metier"
            defaultValue={defaultValue.metier}
            required
          />
        </label>
        <label className="updateForm-fields">
          Email:
          <input
            type="email"
            name="email"
            defaultValue={defaultValue.email}
            required
          />
        </label>
        <label className="updateForm-fields">
          Lien Github:
          <input type="text" name="github" defaultValue={defaultValue.github} />
        </label>
        <label className="updateForm-fields">
          Lien linkedin:
          <input
            type="text"
            name="linkedin"
            defaultValue={defaultValue.linkedin}
          />
        </label>
        <section className="button-modifier-EditUserForm">
          <button type="submit" className="update-profil-button">
            {children}
          </button>
        </section>
      </form>
    </section>
  );
}
export default EditUserForm;
