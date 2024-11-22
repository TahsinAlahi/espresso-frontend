import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import AddCoffeePage from "./pages/AddCoffeePage";

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
      {
        path: "/add-coffee",
        element: <AddCoffeePage />,
      },
    ],
  },
]);

export default router;
