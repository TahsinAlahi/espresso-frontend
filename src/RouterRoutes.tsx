import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./AppLayout";
import CoffeeProvider from "./contexts/CoffeeContext";
import Loader from "./Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AddCoffeePage = lazy(() => import("./pages/AddCoffeePage"));
const CoffeeDetailPage = lazy(() => import("./pages/CoffeeDetailPage"));
const EditCoffeePage = lazy(() => import("./pages/EditCoffeePage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function SuspenseWrapper(Component: React.FC) {
  return (
    <Suspense fallback={<Loader className="h-svh" />}>
      <Component />
    </Suspense>
  );
}

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
        element: SuspenseWrapper(HomePage),
      },
      {
        path: "/add-coffee",
        element: SuspenseWrapper(AddCoffeePage),
      },
      {
        path: "/edit-coffee/:id",
        element: SuspenseWrapper(EditCoffeePage),
      },
      {
        path: "/coffee/:id",
        element: SuspenseWrapper(CoffeeDetailPage),
      },
      {
        path: "*",
        element: SuspenseWrapper(ErrorPage),
      },
    ],
  },
]);

export default router;
