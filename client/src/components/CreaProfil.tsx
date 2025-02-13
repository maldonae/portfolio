import { useNavigate } from "react-router-dom";
import NewUserForm from "./NewUserForm";

function CreaProfil() {
  const navigate = useNavigate();

  const newUser = {
    firstname: "",
    lastname: "",
    metier: "",
    email: "",
    userpassword: "",
    passwordConfirm: "",
    github: "",
    linkedin: "",
  };

  return (
    <NewUserForm
      defaultValue={newUser}
      onSubmit={(newData: typeof newUser) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        })
          .then((response) => {
            if (response.status === 403) {
              alert("Vérifiez les informations saisies !");
            } else {
              return response.json();
            }
          })

          .then((data) => {
            navigate(`/Profil/${data.insertId}`);
          });
      }}
    />
  );
}

export default CreaProfil;
