import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Projet = {
  id: number;
  title: string;
  descript: string;
  nameofteam: string;
  picture: string;
  user_id: number;
};

class ExperienceRepository {
  // The C of CRUD - Create operation

  async create(projet: Omit<Projet, "id">) {
    // Execute the SQL INSERT query to add a new experience to the "projet" tabl
    const [result] = await databaseClient.query<Result>(
      "insert into projet (title, descript, nameofteam, picture, user_id) values (?, ?, ?, ?, ?)",
      [
        projet.title,
        projet.descript,
        projet.nameofteam,
        projet.picture,
        projet.user_id,
      ],
    );

    // Return the ID of the newly inserted projet
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(projetId: number) {
    // Execute the SQL SELECT query to retrieve a specific projet by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from projet where id = ?",
      [projetId],
    );

    // Return the first row of the result, which represents the projet
    return rows[0] as Projet;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all experiences from the "experience" table
    const [rows] = await databaseClient.query<Rows>("select * from projet");

    // Return the array of projet
    return rows as Projet[];
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an projet by its ID

  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing projet from the "projet" table
    const [result] = await databaseClient.query<Result>(
      "delete from projet where id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new ExperienceRepository();
