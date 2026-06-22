import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import LoginFeature from "../features/Auth/LoginFeature";
import DashBoard from "../pages/DashBoard";
import DashboardLayout from "../features/Dashboard/DashboardLayout";
import Ticket from "../pages/Ticket";
import UserSettings from "@/pages/UserSettings";
import Team from "@/pages/Team";
import Department from "@/pages/Department";

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
        path: "/department",
        element: <Department />,
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
