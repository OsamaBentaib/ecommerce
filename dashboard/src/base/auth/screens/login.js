import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authLogin } from "../../store/actions/auth";
export class Login extends Component {
  handleSubmit = () => {
    this.props.login("admin", "admin");
  };
  render() {
    const { token, loading } = this.props;
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row align-items-center">
          <h1 className="display-4 text-center mb-3">Access</h1>
          <p className="text-muted text-center mb-5">
            Free access to the dashboard.
          </p>
          <button
            disabled={loading}
            onClick={() => this.handleSubmit()}
            className={`btn btn-lg btn-block btn-primary mb-3 ${
              loading && "disabled"
            }`}
          >
            {loading ? "Please wait" : "access as gest"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) =>
      dispatch(authLogin(username, username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
