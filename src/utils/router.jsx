import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import LoginFeature from "../features/Auth/LoginFeature";
import DashBoard from "../pages/DashBoard";
import DashboardLayout from "../features/Dashboard/DashboardLayout";
import Ticket from "../pages/Ticket";
import UserSettings from "@/pages/UserSettings";
import Team from "@/pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginFeature />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <DashboardLayout/>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/tickets",
        element: <Ticket />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/settings",
        element: <UserSettings />,
      }
    ]
  },
]);

export default router;
