import { useEffect, useState } from "react";
import "./Profil.css";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  metier: string;
  email: string;
  github: string;
  linkedin: string;
}

function Profil() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users`)
      .then((response) => response.json())
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des utilisateurs:", error),
      );
  }, []);

  if (!users) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      {users.map((user) => (
        <div className="profil_div" key={user.id}>
          <img
            src="/src/assets/images/Eric.png"
            alt="Photo_de_profil"
            id="photo_eric"
          />
          <h1 id="nom_prenom">
            {user.firstname} {user.lastname}
          </h1>
          <h2 id="profil-metier" aria-label="metier">
            {user.metier}
          </h2>

          <section className="donnees">
            <div className="email_donnees">
              <a href={`mailto:${user.email}`}>
                <img
                  src="/src/assets/images/mail.png"
                  alt="lien mail"
                  id="profil-mail"
                />
              </a>
              <p id="profil-email" aria-label="email">
                {user.email}
              </p>
            </div>
            <div className="github_donnees">
              <a href={user.github} target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/images/github.png"
                  alt="lien github"
                  id="profil-git"
                />
              </a>
              <p id="profil-github" aria-label="github">
                {user.github}
              </p>
            </div>
            <div className="linkedin_donnees">
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/images/linkedin.png"
                  alt="lien linkedin"
                  id="profil-link"
                />
              </a>
              <p id="profil-linkedin" aria-label="linkedin">
                {user.linkedin}
              </p>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}

export default Profil;
