import { faAngleDown, faAngleUp, faArchive } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../../Reports/Report.component";
import classes from "./LegacyReportSec.module.css";

const LegacyReportSec = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <Report
        className={`${classes.containerReport}`}
        title="My Reports"
        actionIcons={[faAngleDown, faAngleUp]}
        onClick={toggleHandler}
        toggle={toggle}
        icon={faArchive}
      />
    </div>
  );
};

export default LegacyReportSec;
