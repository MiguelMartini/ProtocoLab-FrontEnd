import { createBrowserRouter } from "react-router-dom";
import Test from "../Test";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/prod",
    element: <App />,
  },
]);

export default router;
