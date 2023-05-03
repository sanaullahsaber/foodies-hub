import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'
import ChefSingleCard from "../pages/ChefSingleCard/ChefSingleCard";
const router = createBrowserRouter([
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
        element: <ChefSingleCard></ChefSingleCard>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
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