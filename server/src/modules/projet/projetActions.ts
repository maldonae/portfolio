import type { RequestHandler } from "express";
import projetRepository from "./projetRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all projetss
    const projets = await projetRepository.readAll();

    // Respond with the projets in JSON format
    res.json(projets);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific projet based on the provided ID
    const projetId = Number(req.params.id);
    const projet = await projetRepository.read(projetId);

    // If the projet is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projet in JSON format
    if (projet == null) {
      res.sendStatus(404);
    } else {
      res.json(projet);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the projet data from the request body
    // const file = req.file as Express.Multer.File;
    const { title, descript, nameofteam, user_id } = req.body;

    const newProjet = {
      title,
      descript,
      nameofteam,
      //   picture: file.filename, // Nom du fichier si présent
      user_id: user_id || null,
    };

    // Create the projet
    // const insertId = await projetRepository.create(newProjet);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted projet
    // res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific projet based on the provided ID
    const projetId = Number(req.params.id);
    const projet = await projetRepository.delete(projetId);

    // If the projet is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projet in JSON format
    if (projet == null) {
      res.sendStatus(404);
    } else {
      res.json(projet);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, destroy };
