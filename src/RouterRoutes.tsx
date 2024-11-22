import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import AddCoffeePage from "./pages/AddCoffeePage";
import CoffeeDetailPage from "./pages/CoffeeDetailPage";
import EditCoffeePage from "./pages/EditCoffeePage";

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
        path: "/add-coffee/:id",
        element: <AddCoffeePage />,
      },
      {
        path: "/edit-coffee/:id",
        element: <EditCoffeePage />,
      },
      {
        path: "/coffee",
        element: <CoffeeDetailPage />,
      },
    ],
  },
]);

export default router;
