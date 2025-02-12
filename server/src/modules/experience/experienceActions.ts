import type { RequestHandler } from "express";
import experienceRepository from "./experienceRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
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
    // Fetch a specific item based on the provided ID
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
    const newExperience = {
      organisation: req.body.organisation,
      poste: req.body.poste,
      content: req.body.content,
    };

    // Create the experience
    const insertId = await experienceRepository.create(newExperience);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
