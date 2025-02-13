import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";

interface EditProfilType {
  id: number;
  firstname: string;
  lastname: string;
  metier: string;
  email: string;
  github: string;
  linkedin: string;
}

function ModifProfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<EditProfilType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/users/${id}`)
      .then((response) => response.json())
      .then((data: EditProfilType) => {
        setUser(data);
      });
  }, [id]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <EditUserForm
        defaultValue={user}
        onSubmit={(userData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/users/${user.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }).then((response) => {
            if (response.status === 204) {
              navigate(`/Profil/${user.id}`);
            }
          });
        }}
      >
        Modifier
      </EditUserForm>
    </>
  );
}

export default ModifProfil;
