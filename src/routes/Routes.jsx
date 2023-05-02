import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import About from '../pages/About/About'
import Blog from '../pages/Blog/Blog'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

export default router;