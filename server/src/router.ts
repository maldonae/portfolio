import express from "express";
import experienceActions from "./modules/experience/experienceActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
router.get("/api/experiences", experienceActions.browse);
router.get("/api/experiences/:id", experienceActions.read);
router.post("/api/experiences", experienceActions.add);
router.put("/api/experiences/:id", experienceActions.edit);

/* ************************************************************************* */

export default router;
