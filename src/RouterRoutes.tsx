import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import AddCoffeePage from "./pages/AddCoffeePage";
import CoffeeDetailPage from "./pages/CoffeeDetailPage";

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
      {
        path: "/coffee",
        element: <CoffeeDetailPage />,
      },
    ],
  },
]);

export default router;
