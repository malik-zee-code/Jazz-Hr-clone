import {
  faAngleDown,
  faAngleUp,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Report from "../../Reports/Report.component";
import classes from "./MyReportSection.module.css";

const MyReportSection = () => {
  //   return <DropDownbar className={classes.myreportSec}>MyReportSection</DropDownbar>;
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
        icon={faHeart}
      />
    </div>
  );
};

export default MyReportSection;
