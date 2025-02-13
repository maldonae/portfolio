import type { RequestHandler } from "express";
import userRepository from "./userRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all users
    const users = await userRepository.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user based on the provided ID
    const userId = Number.parseInt(req.params.id);

    const user = await userRepository.read(userId);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id);

    // Vérifiez si l'ID est valide
    if (Number.isNaN(userId)) {
      return; // res.status(400).json({ error: "Invalid user ID" })
    }

    const userData = {
      id: userId,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      metier: req.body.metier,
      email: req.body.email,
      userpassword: req.body.userpassword || null,
      github: req.body.github,
      linkedin: req.body.linkedin,
    };

    const affectedRows = await userRepository.update(userData);
    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404); // Arrêtez ici
      return;
    }

    res.sendStatus(204); // Arrêtez ici aussi
  } catch (err) {
    next(err); // Passez l'erreur au middleware d'erreurs
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the user data from the request body
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      metier: req.body.metier,
      email: req.body.email,
      userpassword: req.body.userpassword || null,
      github: req.body.github,
      linkedin: req.body.linkedin,
    };
    const insertId = await userRepository.create(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user based on the provided ID
    const id = Number(req.params.id);
    const user = await userRepository.delete(id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { browse, read, edit, add, destroy };
