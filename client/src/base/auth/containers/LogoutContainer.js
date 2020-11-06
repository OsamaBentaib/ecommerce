import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

class LogoutContainer extends Component {
    state = {
        token: localStorage.getItem('token'),
    }
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.logout();
        this.setState({ token: null });
    }

    render() {
        if (localStorage.getItem('token') === null) {
            // window.location.reload(false);
            return <Redirect to='/login/' />;
        }
        return (
            <h2>Sorry to see you go...</h2>
        );
    }
}

export default connect(null, { logout })(LogoutContainer);