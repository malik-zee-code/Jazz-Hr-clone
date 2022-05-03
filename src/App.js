import { Route, Routes } from "react-router-dom";
import "./App.css";
import Applications from "./Components/Applications/Applications";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import DashBoard from "./pages/Dashboard/DashBoard";
import Reports from "./pages/Reports/Reports";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
        <Route path="/reports/*" element={<Reports />} />
        <Route path="/applications/*" element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;
