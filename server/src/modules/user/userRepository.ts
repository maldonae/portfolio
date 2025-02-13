import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  metier: string;
  email: string;
  userpassword: string;
  github: string;
  linkedin: string;
};

class UserRepository {
  //   // The C of CRUD - Create operation

  async create(user: Omit<User, "id">): Promise<number> {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, metier, email, userpassword, github, linkedin) values (?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.metier,
        user.email,
        user.userpassword,
        user.github,
        user.linkedin,
      ],
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of users
    return rows as User[];
  }

  async readByEmailWithPassword(email: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  async update(user: User) {
    const { firstname, lastname, metier, email, github, linkedin, id } = user;

    const query =
      "UPDATE user SET firstname = ?, lastname = ?, metier = ?, email = ?, github = ?, linkedin = ? WHERE id = ?";
    const values = [firstname, lastname, metier, email, github, linkedin, id];

    const [result] = await databaseClient.query<Result>(query, values);
    return result.affectedRows;
  }
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing user from the "user" table
    const [result] = await databaseClient.query<Result>(
      "delete from user where id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new UserRepository();
