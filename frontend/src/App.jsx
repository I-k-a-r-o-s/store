import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};
export default App;
