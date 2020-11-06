import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { authSignup } from "../../store/actions/auth";
export class Signup extends Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    err: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isloading: true,
    });
    const { email, username, password1, password2 } = this.state;
    if (
      email.trim().length !== 0 ||
      password1.trim().length !== 0 ||
      password2.trim().length !== 0 ||
      username.trim().length !== 0
    ) {
      if (password1 === password2) {
        this.props.Signup(email, username, password1);
      } else {
        this.setState({
          err: "The password is doesn't match!",
        });
      }
    } else {
      this.setState({
        err: "Please Fill all fields!",
      });
    }
  };
  render() {
    const { error, loading, token } = this.props;
    const { username, password1, password2, email, err } = this.state;
    if (token != null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="layout">
          <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center no-gutters min-vh-100">
              <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
                <h1 className="font-bold text-center">Sign up</h1>
                <p className="text-center mb-3">Welcome to our store.</p>
                <form className="mb-6" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only">username</label>
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
                    <label className="sr-only">Email Address</label>
                    <input
                      type="email"
                      onChange={this.handleChange}
                      value={email}
                      name="email"
                      placeholder="Email Address"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Password</label>
                    <input
                      type="password"
                      onChange={this.handleChange}
                      value={password1}
                      name="password1"
                      placeholder="Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Confirm Password</label>
                    <input
                      type="password"
                      onChange={this.handleChange}
                      value={password2}
                      name="password2"
                      placeholder="Confirm Password"
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="form-group">
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        <small>{error}</small>
                      </div>
                    )}
                    {err && (
                      <div className="alert alert-danger" role="alert">
                        <small>{err}</small>
                      </div>
                    )}
                  </div>
                  <button
                    disabled={loading}
                    className="btn btn-lg btn-block btn-dark"
                    type="submit"
                  >
                    {loading ? "Sigging up ..." : "Signup"}
                  </button>
                  <p className="text-center mt-2">
                    Already have account? <Link to="/login/">Login</Link>.
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
    Signup: (email, username, password1) =>
      dispatch(authSignup(username, email, password1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
