import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import AddCoffeePage from "./pages/AddCoffeePage";
import CoffeeDetailPage from "./pages/CoffeeDetailPage";
import EditCoffeePage from "./pages/EditCoffeePage";
import ErrorPage from "./pages/ErrorPage";
import CoffeeProvider from "./contexts/CoffeeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CoffeeProvider>
        <AppLayout />
      </CoffeeProvider>
    ),
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
        path: "/edit-coffee/:id",
        element: <EditCoffeePage />,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetailPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
