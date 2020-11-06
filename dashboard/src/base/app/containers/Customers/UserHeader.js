import React, { Component } from "react";

export class UserHeader extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-body">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="header-pretitle">Overview</h6>
              <h1 className="header-title">Customers</h1>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col">
              <ul className="nav nav-tabs nav-overflow header-tabs">
                <li className="nav-item">
                  <span className="nav-link active mr-3 ml-2">All</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserHeader;
