import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main/Main";
import Listing from "../Pages/Listing/Listing";
import ListingCars from "../Pages/ListingCars/ListingCars";
import Pricing from "../Pages/Pricing/Pricing";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Switch from "../Pages/User/Switch";
import ViewDetails from "../Pages/CarDetails/ViewDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/car-details/:id",
        element: <ViewDetails />,
      },
      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "/listing/:type",
        element: <ListingCars />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/user",
    element: <Switch />,
  },
]);

export default routes;
