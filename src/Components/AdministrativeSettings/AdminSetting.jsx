import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./AdminSetting.module.css";

const AdminSetting = () => {
  const location = useLocation();
  return (
    <div className={`${classes.AdminSetting} container`}>
      <div className={`${classes.AdminSetting__label} fs-3`}>
        Administrative Settings
      </div>
      <ul className={classes.Admin__tabs}>
        <li>
          <Link
            className={`${classes.tab__links} fs-8 ${
              "/admin/template/hiring-workflow" === location.pathname
                ? classes.active
                : ""
            }`}
            to="/admin/template/hiring-workflow"
          >
            Template
          </Link>
        </li>
        <li>
          <Link
            className={`${classes.tab__links} ${
              "/admin/job-board" === location.pathname ? classes.active : ""
            }`}
            to="/admin/job-board"
          >
            job Board
          </Link>
        </li>
        <li>
          <Link
            className={`${classes.tab__links}  ${
              "/admin/integrations" === location.pathname ? classes.active : ""
            }`}
            to="/admin/integrations"
          >
            integrations
          </Link>
        </li>
        <li>
          <Link
            className={`${classes.tab__links} ${
              "/admin/privilages" === location.pathname ? classes.active : ""
            }`}
            to="/admin/privilages"
          >
            privileges
          </Link>
        </li>
        <li>
          <Link
            className={`${classes.tab__links} ${
              "/admin/acc" === location.pathname ? classes.active : ""
            }`}
            to="/admin/acc"
          >
            account
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSetting;
