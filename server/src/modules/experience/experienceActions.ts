import type { RequestHandler } from "express";
import experienceRepository from "./experienceRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all experiences
    const experiences = await experienceRepository.readAll();

    // Respond with the experiences in JSON format
    res.json(experiences);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific experience based on the provided ID
    const experienceId = Number(req.params.id);
    const experience = await experienceRepository.read(experienceId);

    // If the experience is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the experience in JSON format
    if (experience == null) {
      res.sendStatus(404);
    } else {
      res.json(experience);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the experience data from the request body
    const { organisation, poste, content, user_id } = req.body;

    const newExperience = {
      organisation,
      poste,
      content,
      user_id: user_id || null,
    };

    // Create the experience
    const insertId = await experienceRepository.create(newExperience);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted experience
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const edit: RequestHandler = async (req, res, next) => {
  try {
    const experienceId = Number.parseInt(req.params.id);

    // Vérifiez si l'ID est valide
    if (Number.isNaN(experienceId)) {
      return; // res.status(400).json({ error: "Invalid experience ID" })
    }

    const experienceData = {
      id: experienceId,
      organisation: req.body.organisation,
      poste: req.body.poste,
      content: req.body.content,
      user_id: req.body.user_id || null,
    };

    const affectedRows = await experienceRepository.update(experienceData);
    // If the experience is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the experience in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404); // Arrêtez ici
      return;
    }

    res.sendStatus(204); // Arrêtez ici aussi
  } catch (err) {
    next(err); // Passez l'erreur au middleware d'erreurs
  }
};
const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific experience based on the provided ID
    const experienceId = Number(req.params.id);
    const experience = await experienceRepository.delete(experienceId);

    // If the experience is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the experience in JSON format
    if (experience == null) {
      res.sendStatus(404);
    } else {
      res.json(experience);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
