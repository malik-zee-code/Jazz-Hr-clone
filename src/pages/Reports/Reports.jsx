import React from "react";
import ReportHeader from "../../Components/ReportHeader/ReportHeader";
import ReportUIContainer from "../../Components/ReportUIContainer/ReportUIContainer";
import classes from "./Reports.module.css";

const Reports = () => {
  return (
    <div className={classes.reportContainer}>
      <ReportHeader />
      <ReportUIContainer />
    </div>
  );
};

export default Reports;
