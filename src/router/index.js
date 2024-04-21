import Login from "../pages/login";
import About from "../pages/about";
import { BrowserRouter as Router } from "react-router-dom";

Router([
  {
    path: '/login',
    element: Login
  },
  {
    path: 'about',
    element: About
  }
])

export default Router;