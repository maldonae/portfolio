// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import CreaExperience from "./components/CreaExperience";
import CreaProfil from "./components/CreaProfil";
import DeleteExperience from "./components/DeleteExperience";
import DeleteProfil from "./components/DeleteProfil";
import Experience from "./components/Experience";
import ModifExperience from "./components/ModifExperience";
import ModifProfil from "./components/ModifProfil";
import Profil from "./components/Profil";

import CreaProjet from "./components/CreaProjet";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />, // Renders the App component for the home page
    children: [
      {
        path: "/experiences",
        element: <Experience />, // La page principale pour l'instant
      },
      {
        path: "/Creation_experience",
        element: <CreaExperience />,
      },
      {
        path: "Modification_experience/:id",
        element: <ModifExperience />,
      },
      {
        path: "Suppression_experience/:id",
        element: <DeleteExperience />,
      },
      {
        path: "Suppression_de_profil/:id",
        element: <DeleteProfil />,
      },
      {
        path: "Modification_de_profil/:id",
        element: <ModifProfil />,
      },
      {
        path: "/",
        element: <CreaProfil />, // La page principale
      },
      {
        path: "Profil/:id",
        element: <Profil />,
      },
      {
        path: "profils",
        element: <Profil />,
      },
      {
        path: "/Creation_projet",
        element: <CreaProjet />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
