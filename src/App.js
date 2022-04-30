import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import DashBoard from "./pages/Dashboard/DashBoard";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
      </Routes>
    </div>
  );
};

export default App;
