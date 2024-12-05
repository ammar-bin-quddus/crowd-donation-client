import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import Login from "../auth/Login";
import Register from "../auth/Register";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import DetailsCampaign from "../pages/DetailsCampaign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/campaigns",
        element: <AllCampaign />,
        loader: () => fetch("http://localhost:5000/addCampaign"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoutes>
            <AddCampaign />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoutes>
            <MyCampaign />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoutes>
            <MyDonations />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/campaigns/:id",
    element: (
      <PrivateRoutes>
        <DetailsCampaign />
      </PrivateRoutes>
    ),
    loader: ({ params }) =>
      fetch(`http://localhost:5000/campaigns/${params.id}`),
  },
]);

export default router;
