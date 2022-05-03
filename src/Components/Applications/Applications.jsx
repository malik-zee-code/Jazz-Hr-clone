import React from "react";
import ApplicationsHeader from "../ApplicationsHeader/ApplicationsHeader";
import Status from "../Status/Status";
import classes from "./Applications.module.css";

const Applications = () => {
  return (
    <>
      <ApplicationsHeader />
      <div className={classes.container}>
        <div className="container">
          <table
            className="table table-bordered table-striped table-responsive-stack"
            id="tableOne"
          >
            <thead className="thead-dark">
              <tr>
                <th>Canidate</th>
                <th>Job Name</th>
                <th>Application Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Joe Madam</td>
                <td>Lorem, ipsum.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Malik</td>
                <td>Emunba</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Zack</td>
                <td>Lorem, ipsum.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Apple</td>
                <td>Green and Red</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Joe Madam</td>
                <td>Lorem, ipsum.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Malik</td>
                <td>Emunba</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Zack</td>
                <td>Lorem, ipsum.</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
              <tr>
                <td>Apple</td>
                <td>Green and Red</td>
                <td>34/2/1</td>
                <td className="status">
                  <Status />
                </td>
              </tr>{" "}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Applications;
