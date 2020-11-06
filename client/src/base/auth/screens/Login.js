import React, { Component } from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authLogin } from "../../store/actions/auth";
export class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    err: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.setState({ email: username });
    if (username.length > 0 && password.length > 0) {
      this.props.login(username, username, password);
    } else {
      // this.setState({ err: "Please fill all data" });
    }
  };
  render() {
    const { error, loading, token, history } = this.props;
    const { username, password, err } = this.state;
    if (token) {
      if (history.location.search) {
        const redirectNext = history.location.search.split("?")[1];
        const [key, value] = redirectNext.split("=");
        const redirectTo = value;
        if (redirectTo && key) {
          return <Redirect to={redirectTo} />;
        }
      }
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="layout">
          <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center no-gutters min-vh-100">
              <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
                <h1 className="font-bold text-center">Sign in</h1>
                <p className="text-center mb-3">Welcome to our store.</p>
                <form className="mb-6" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only">Email Address or username</label>
                    <input
                      type="username"
                      onChange={this.handleChange}
                      value={username}
                      name="username"
                      placeholder="Username"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input
                      type="password"
                      onChange={this.handleChange}
                      value={password}
                      name="password"
                      placeholder="Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    {error !== null && (
                      <div className="custom-control alert alert-danger">
                        <span>{error}</span>
                      </div>
                    )}
                    {err !== "" && (
                      <div className="alert alert-danger">
                        <small>{err}</small>
                      </div>
                    )}
                  </div>
                  <button
                    className={`btn btn-lg btn-block btn-dark ${
                      loading && "disabled"
                    }`}
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Logging in ..." : "Login"}
                  </button>
                  <p className="text-center mt-1">
                    Don't have an account yet <Link to="/signup/">Sign up</Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
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
    login: (email, username, password) =>
      dispatch(authLogin(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
