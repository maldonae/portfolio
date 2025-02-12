import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditExperienceForm from "./EditExperienceForm";

interface EditExperienceType {
  id: number;
  organisation: string;
  poste: string;
  content: string;
}

function ModifExperience() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [experience, setExperience] = useState<EditExperienceType | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/experiences/${id}`)
      .then((response) => response.json())
      .then((data: EditExperienceType) => {
        setExperience(data);
      });
  }, [id]);

  if (!experience) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <EditExperienceForm
        defaultValue={experience}
        onSubmit={(experienceData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/experiences/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(experienceData),
          }).then((response) => {
            if (response.status === 204) {
              navigate("/experiences");
            }
          });
        }}
      >
        Modifier
      </EditExperienceForm>
    </>
  );
}

export default ModifExperience;
