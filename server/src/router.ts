import express from "express";
import experienceActions from "./modules/experience/experienceActions";
import projetActions from "./modules/projet/projetActions";
import userActions from "./modules/user/userActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// import multer from "multer";
// const upload = multer({ dest: "public/assets/images" });

router.get("/api/projets", projetActions.browse);
router.get("/api/projets/:id", projetActions.read);
// router.post("/api/projets", upload.single("picture"), projetActions.add);
router.delete("/api/projets/:id", projetActions.destroy);
/* ************************************************************************* */
router.get("/api/experiences", experienceActions.browse);
router.get("/api/experiences/:id", experienceActions.read);
router.post("/api/experiences", experienceActions.add);
router.put("/api/experiences/:id", experienceActions.edit);
router.delete("/api/experiences/:id", experienceActions.destroy);

/* ************************************************************************* */
router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.post("/api/users", userActions.add);
router.put("/api/users/:id", userActions.edit);
router.delete("/api/users/:id", userActions.destroy);

export default router;
