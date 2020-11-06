import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/auth'
import { BsArrowBarRight } from 'react-icons/bs';
export class LoginContainer extends Component {
    state = {
        username: "",
        email: "",
        password: "",
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, username, password);
    };
    render() {
        const { error, loading, token } = this.props;
        const { username, password } = this.state;
        if (token) {
            return <Redirect to="/" />;
        }
        return (
            <div>
                <div className="layout">
                    <div className="container d-flex flex-column">
                        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
                            <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
                                <h1 className="font-bold text-center">Sign in</h1>
                                <p className="text-center mb-3">Welcome to the official Chat web-client.</p>
                                <form className="mb-6" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="sr-only">Email Address or username</label>
                                        <input type="username" onChange={this.handleChange} value={username} name="username" placeholder="Username" className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only">Password</label>
                                        <input type="password" onChange={this.handleChange} value={password} name="password" placeholder="Password" className="form-control form-control-lg" />
                                    </div>
                                    <div className="form-group d-flex justify-content-between">
                                        <div className="custom-control">
                                            {error && <p>{this.props.error.message}</p>}
                                        </div>
                                        <Link to="/password_rest/">Reset password</Link>
                                    </div>
                                    <button className="btn btn-lg btn-block btn-dark" type="submit">{loading ? "Logging in ..." : "Login"}</button>
                                    <p className="text-center mt-4">
                                        Don't have an account yet <Link to="/signup/">Sign up</Link>.
                                     </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, username, password) => dispatch(authLogin(username, email, password))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
