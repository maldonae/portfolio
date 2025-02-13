import type { ReactNode } from "react";

export type ProfilType = {
  firstname: string;
  lastname: string;
  metier: string;
  email: string;
  userpassword: string;
  passwordConfirm: string;
  github: string;
  linkedin: string;
};

interface CreaProfilType {
  children?: ReactNode;
  defaultValue: ProfilType;
  onSubmit: (user: ProfilType) => void;
}

function NewUserForm({ children, defaultValue, onSubmit }: CreaProfilType) {
  return (
    <section className="create-profil-container">
      <h1>Ajouter un profil</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const firstname = formData.get("firstname") as string;
          const lastname = formData.get("lastname") as string;
          const metier = formData.get("metier") as string;
          const email = formData.get("email") as string;
          const userpassword = formData.get("userpassword") as string;
          const passwordConfirm = formData.get("passwordConfirm") as string;
          const github = formData.get("github") as string;
          const linkedin = formData.get("linkedin") as string;

          if (
            !firstname ||
            !lastname ||
            !metier ||
            !email ||
            !userpassword ||
            !passwordConfirm ||
            !github ||
            !linkedin
          ) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
          }

          onSubmit({
            firstname,
            lastname,
            metier,
            email,
            userpassword,
            passwordConfirm,
            github,
            linkedin,
          });

          alert("Profil créé avec succès !");
        }}
      >
        <label className="form-fields" htmlFor="firstname">
          Prénom *
        </label>
        <input
          className="form-fields"
          id="firstname"
          type="text"
          name="firstname"
          placeholder="Entrez votre prénom"
          defaultValue={defaultValue.firstname}
        />
        <label className="form-fields" htmlFor="lastname">
          Nom *
        </label>
        <input
          className="form-fields"
          id="lastname"
          type="text"
          name="lastname"
          placeholder="Entrez votre nom"
          defaultValue={defaultValue.lastname}
        />

        <label className="form-fields" htmlFor="metier">
          Métier *
        </label>
        <input
          className="form-fields"
          id="metier"
          type="text"
          name="metier"
          placeholder="Entrer votre métier"
          defaultValue={defaultValue.metier}
        />

        <label className="form-fields" htmlFor="email">
          Email *
        </label>
        <input
          className="form-fields"
          id="email"
          type="email"
          name="email"
          placeholder="Entrez votre email"
          defaultValue={defaultValue.email}
        />

        <label className="form-fields" htmlFor="userpassword">
          Mot de passe *
        </label>
        <input
          className="form-fields"
          id="userpassword"
          type="password"
          name="userpassword"
          placeholder="Entrez votre mot de passe"
          defaultValue={defaultValue.userpassword}
        />

        <label className="form-fields" htmlFor="passwordConfirm">
          Confirmer le mot de passe *
        </label>
        <input
          className="form-fields"
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="Confirmez votre mot de passe"
          defaultValue={defaultValue.passwordConfirm}
        />
        <label className="form-fields" htmlFor="github">
          Lien Github
        </label>
        <input
          className="form-fields"
          id="github"
          type="github"
          name="github"
          placeholder="Entrez votre lien github"
          defaultValue={defaultValue.github}
        />
        <label className="form-fields" htmlFor="linkedin">
          Lien Linkedin
        </label>
        <input
          className="form-fields"
          id="linkedin"
          type="linkedin"
          name="linkedin"
          placeholder="Entrez votre lien linkedin"
          defaultValue={defaultValue.linkedin}
        />

        <button type="submit" className="create-profil-button">
          {children}CRÉER MON PROFIL
        </button>
      </form>
    </section>
  );
}

export default NewUserForm;
