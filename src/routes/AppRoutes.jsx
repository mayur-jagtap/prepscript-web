import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Learning from "../pages/Learning";
// import CategoryPage from "./pages/CategoryPage";
import CategoryProblems from "../pages/CategoryProblems";
import Layout from "../components/layout/Layout"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/learning", element: <Learning /> },
      // { path: "/category/:slug", element: <CategoryPage /> },
      { path: "/category/:slug/problems", element: <CategoryProblems /> },
    ],
  },
])
