import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Navbar.module.css";
import {
  faCalendarDays,
  faCheck,
  faCircleQuestion,
  faEye,
  faInbox,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={` navbar ${classes.navbar} `}>
      <div className={`${classes.nav_text_links} `}>
        <div className={classes.logo}>
          <Link to="/" className={classes.link_logo}> Jazz</Link>
        </div>
        <ul className={`${classes.lists}`}>
          <li className={`${classes.list} navbar-item`}>
            <Link className={classes.link} to="/dashboard">
              DashBoard
            </Link>
          </li>
          <li className={`${classes.list} navbar-item`}>
            <Link className={classes.link} to="/jobs">
              Jobs
            </Link>
          </li>
          <li className={classes.list}>
            <Link className={classes.link} to="/canidates">
              canidates
            </Link>
          </li>
          <li className={classes.list}>
            <Link className={classes.link} to="/people">
              people
            </Link>
          </li>
          <li className={classes.list}>
            <Link className={classes.link} to="/reports">
              reports
            </Link>
          </li>
          <li className={classes.list}>
            <Link className={classes.link} to="/admin">
              admin
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.nav__link__icons}>
        <ul className={classes.nav__list__icons}>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faEye} />
            </Link>
            1
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCheck} />{" "}
            </Link>
            0
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCalendarDays} />{" "}
            </Link>{" "}
            1
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faInbox} />{" "}
            </Link>
            0
          </li>

          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </Link>
          </li>
          <li className={classes.list__icons}>
            <Link className={classes.link} to="/">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </li>
        </ul>

        {/* <ul className={classes.query}></ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
