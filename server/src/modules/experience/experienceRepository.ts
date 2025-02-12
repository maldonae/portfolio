import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Experience = {
  id: number;
  organisation: string;
  poste: string;
  content: string;
};

class ExperienceRepository {
  // The C of CRUD - Create operation

  async create(experience: Omit<Experience, "id">) {
    // Execute the SQL INSERT query to add a new experience to the "experience" table
    const [result] = await databaseClient.query<Result>(
      "insert into experience (organisation, poste, content) values (?, ?, ?)",
      [experience.organisation, experience.poste, experience.content],
    );

    // Return the ID of the newly inserted experience
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific experience by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from experience where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the experience
    return rows[0] as Experience;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all experiences from the "experience" table
    const [rows] = await databaseClient.query<Rows>("select * from experience");

    // Return the array of items
    return rows as Experience[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing experience
  async update(experience: Experience) {
    const { organisation, poste, content, id } = experience;

    const query =
      "UPDATE experience SET organisation = ?, poste = ?, content = ? WHERE id = ?";
    const values = [organisation, poste, content, id];

    const [result] = await databaseClient.query<Result>(query, values);
    return result.affectedRows;
  }
  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID
}

export default new ExperienceRepository();
