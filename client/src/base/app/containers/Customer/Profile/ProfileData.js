import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUserAccount } from "./../../../../store/actions/user";

export class ProfileData extends Component {
  onhandelDeleteAccount = (userId) => {
    this.props.deleteUserAccount(userId);
  };
  render() {
    const { userId, deleted, loading } = this.props;
    if (deleted) {
      return <Redirect to="/logout/" />;
    }
    return (
      <Fragment>
        <h3 className="mb-5">Settings</h3>
        <div className="mt-4"></div>
        <p className="text-muted text-sm">
          Please note that if your delete your account you wont ba able to login
          or to see your orders and cart, wishlist, and for other purposes
          described in our <Link to=""> privacy policy</Link>.
        </p>
        <p className="text-muted text-sm mb-5">
          I have read and agree to the website{" "}
          <Link to="">terms and conditions</Link>. *{" "}
        </p>
        <p className="text-sm mb-2 text-danger">
          ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?
        </p>
        <button
          onClick={() => this.onhandelDeleteAccount(userId)}
          className={`btn btn-danger danger ${loading && "disabled"}`}
          disabled={loading}
          type="submit"
        >
          {loading ? "Deleting your account ...." : "Delete Your account"}
        </button>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    deleted: state.user.deleted,
    loading: state.user.loading,
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { deleteUserAccount })(ProfileData);
