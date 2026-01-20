import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
// import Categories from "../pages/Categories"
// import Question from "../pages/Question"
// import Login from "../pages/Login"
// import Dashboard from "../pages/Dashboard"
// import Admin from "../pages/Admin"
import Layout from "../components/layout/Layout"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    //   { path: "/categories", element: <Categories /> },
    //   { path: "/question/:id", element: <Question /> },
    //   { path: "/login", element: <Login /> },
    //   { path: "/dashboard", element: <Dashboard /> },
    //   { path: "/admin", element: <Admin /> },
    ],
  },
])
