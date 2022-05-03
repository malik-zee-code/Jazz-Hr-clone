import {
  faAngleDown,
  faAngleUp,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../Report.component";
import ReportTabs from "../ReportTabs/ReportTabs";
import classes from "./StandardReports.module.css";

const DUMMY_SECREPORT = [
  {
    name: "Source Quality",
    reportTypes: [
      { type: "Overall", link: "/reports/overall" },
      { type: "by Source", link: "reports/source" },
      { type: "by Department", link: "reports/department" },
      { type: "by Hiring Manager", link: "reports/hiring-manager" },
      { type: "by Recruiter", link: "reports/recruiter" },
      { type: "by Job Board", link: "reports/job-board" },
      { type: "by Refferer", link: "reports/refferer" },
    ],
  },
  {
    name: "Application Conversion",
    reportTypes: [],
  },
  {
    name: "Hiring Pipeline",
    reportTypes: [],
  },
  {
    name: "Interviews",
    reportTypes: [],
  },
  {
    name: "Offers",
    reportTypes: [],
  },
  {
    name: "time to fill",
    reportTypes: [],
  },
  {
    name: "time to hire",
    reportTypes: [],
  },
];

const StandardReports = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <div className={classes.container}>
      <Report
        icon={faChartBar}
        actionIcons={[faAngleDown, faAngleUp]}
        title="Secondary Report"
        onClick={toggleHandler}
        toggle={toggle}
      />

      {toggle && (
        <div className={`${classes.container} `}>
          {DUMMY_SECREPORT.map((r) => {
            return (
              <>
                <ReportTabs
                  key={Math.random()}
                  name={r.name}
                  reportTypes={r.reportTypes}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StandardReports;
