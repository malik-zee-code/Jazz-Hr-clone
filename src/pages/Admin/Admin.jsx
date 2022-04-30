import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSetting from "../../Components/AdministrativeSettings/AdminSetting";
import Template from "./Template/Template";

const Admin = () => {
  return (
    <div>
      <AdminSetting />
      <Routes>
        <Route path="template/*" element={<Template />} />
      </Routes>
    </div>
  );
};

export default Admin;
