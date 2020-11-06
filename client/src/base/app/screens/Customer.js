import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CustomerContainer from "../containers/Customer/CustomerContainer";

export class Costumer extends Component {
  render() {
    if (!this.props.token) {
      return <Redirect to="/login/?next=/customer/" />;
    }
    return (
      <Fragment>
        <CustomerContainer />
      </Fragment>
    );
  }
}
const mapSateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapSateToProps, null)(Costumer);
