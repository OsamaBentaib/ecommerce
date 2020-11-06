import React, { Component } from "react";
import PasswordChange from "./PasswordChange";
import ProfileData from "./ProfileData";

export class Profile extends Component {
  render() {
    return (
      <div className="col-lg-8 col-xl-9 mb-5 mb-lg-0">
        <PasswordChange />
        <hr className="mb-5" />
        <ProfileData />
      </div>
    );
  }
}
export default Profile;
