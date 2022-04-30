import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Categories from "../../../Components/Categories/Categories";
import Documents from "../../../Components/Documents/Documents";
import Emails from "../../../Components/Emails/Emails";
import Evaluations from "../../../Components/Evaluations/Evaluations";
import HiringWorkflow from "../../../Components/HiringWorkflow/HiringWorkflow";
import Interviews from "../../../Components/Interviews/Interviews";
import Questionaries from "../../../Components/Questionaries/Questionaries";
import Sidebar from "../../../Components/Template-sidebar/Sidebar";
import classes from "./Template.module.css";

const Template = () => {
  const hamburgerHandler = () => {};
  return (
    <React.Fragment>
      <div className={`${classes.template} `} onClick={hamburgerHandler}>
        <Sidebar className="row" />
        <Routes>
          <Route path="hiring-workflow" element={<HiringWorkflow />} />
          <Route path="questionaries" element={<Questionaries />} />
          <Route path="interview" element={<Interviews />} />
          <Route path="evaluation" element={<Evaluations />} />
          <Route path="email" element={<Emails />} />
          <Route path="category" element={<Categories />} />
          <Route path="documents" element={<Documents />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Template;
