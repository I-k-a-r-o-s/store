import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
