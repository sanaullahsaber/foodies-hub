import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import LoginLayout from "../layouts/LoginLayout";
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'
import ChefSingleCard from "../pages/ChefSingleCard/ChefSingleCard";
import Login from "../pages/Login/Login/Login"
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";
const router = createBrowserRouter([
  
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <ChefSingleCard></ChefSingleCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://foodies-hub-server-sanaullahsaber.vercel.app/chefs/${params.id}`
          ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;