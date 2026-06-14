import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import LoginFeature from "../features/Auth/LoginFeature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginFeature />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
