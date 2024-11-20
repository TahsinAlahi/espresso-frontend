import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
