import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Learning from "../pages/Learning";
import ProblemDetails from "../pages/ProblemDetails";
import CategoryProblems from "../pages/CategoryProblems";
import Layout from "../components/layout/Layout"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/learning", element: <Learning /> },
      { path: "/problems/:id", element: <ProblemDetails /> },
      { path: "/category/:slug/problems", element: <CategoryProblems /> },
    ],
  },
]);
