import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import ErrorPage from "../pages/NotFoundPage/ErrorPage";
import Marketplace from "../pages/MarketplacePage/Marketplace";
import Resource from "../pages/ResourcePage/Resource";
import About from "../pages/AboutPage/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/market_place",
        element: <Marketplace />,
      },
      {
        path: "/resource",
        element: <Resource />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
