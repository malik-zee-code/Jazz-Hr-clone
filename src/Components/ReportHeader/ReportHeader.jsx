import React from "react";
import PageHeader from "../../UI/PageHeader";
import Button from "../button/Button";
import classes from "./ReportHeader.module.css";
const ReportHeader = () => {
  return (
    <PageHeader className="container">
      <div className={classes.header}>
        <div className={classes.title}> Reports</div>
        <div className={classes.btn}>
          <Button className={classes.button}>+ Create custom report</Button>
        </div>
      </div>
    </PageHeader>
  );
};

export default ReportHeader;
