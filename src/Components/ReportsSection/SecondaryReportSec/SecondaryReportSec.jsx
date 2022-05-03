import {
  faAngleDown,
  faAngleUp,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../../Reports/Report.component";
import classes from "./SecondaryReportSec.module.css";

const SecondaryReportSec = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <Report
        className={`${classes.containerReport}`}
        title="Secondary Reports"
        actionIcons={[faAngleDown, faAngleUp]}
        onClick={toggleHandler}
        toggle={toggle}
        icon={faChartBar}
      />
    </div>
  );
};

export default SecondaryReportSec;
