import React, { Component } from "react";
import { ChangePassword } from "./../../../../store/actions/password";
import { connect } from "react-redux";
export class PasswordChange extends Component {
  state = {
    oldPassword: "",
    newPassword1: "",
    newPassword2: "",
    err: null,
  };
  onhandelChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onhandelSubmit = (e) => {
    const { oldPassword, newPassword1, newPassword2 } = this.state;
    if (oldPassword !== "" || newPassword1 !== "" || newPassword2 !== "") {
      if (newPassword1 === newPassword2) {
        this.props.ChangePassword(oldPassword, newPassword1);
      } else {
        this.setState({ err: "The password didn't match!" });
      }
    } else {
      this.setState({ err: "please fill all the password fields!" });
    }
  };
  render() {
    const { loading, success, error } = this.props;
    const { oldPassword, newPassword1, err, newPassword2 } = this.state;
    return (
      <div className="mb-5">
        <h3 className="mb-5">Change your password</h3>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="password_old">
                Old password
              </label>
              <input
                className="form-control"
                onChange={(e) => this.onhandelChange(e)}
                name="oldPassword"
                value={oldPassword}
                id="password_old"
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="password_1">
                New password
              </label>
              <input
                className="form-control"
                onChange={(e) => this.onhandelChange(e)}
                name="newPassword1"
                value={newPassword1}
                id="password_1"
                type="password"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="form-label" htmlFor="password_2">
                Retype new password
              </label>
              <input
                className="form-control"
                onChange={(e) => this.onhandelChange(e)}
                name="newPassword2"
                value={newPassword2}
                id="password_2"
                type="password"
              />
            </div>
          </div>
        </div>
        {!loading && (
          <div className="mt-2">
            {err && (
              <div className="alert alert-danger">
                <span>{err}</span>
              </div>
            )}
            {error && (
              <div className="alert alert-danger">
                <span>{error}</span>
              </div>
            )}
            {success && (
              <div className="alert alert-success">
                <span>{"Password changed!"}</span>
              </div>
            )}
          </div>
        )}
        <div className="mt-2">
          <button
            onClick={() => this.onhandelSubmit()}
            className="btn btn-dark"
            disabled={loading}
            type="submit"
          >
            {loading ? "Please Wait...." : "Change password"}
          </button>
        </div>
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  return {
    loading: state.password.loading,
    success: state.password.success,
    error: state.password.error,
  };
};
export default connect(mapSateToProps, { ChangePassword })(PasswordChange);
