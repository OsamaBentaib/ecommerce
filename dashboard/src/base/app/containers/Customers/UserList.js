import React, { Component } from "react";
import { FiLoader, FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import { fetchUsers } from "../../../store/actions/users";
import UserItem from "./UserItem";
export class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers(0, 2);
  }
  onhandelLoadMore = (s, l) => {
    this.props.fetchUsers(s, l);
  };
  render() {
    const { users, loading } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <form>
            <div className="input-group input-group-flush">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {loading ? <FiLoader size="19" /> : <FiSearch size="19" />}
                </span>
              </div>
              <input
                className="form-control list-search"
                type="search"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="table-responsive">
          <table className="table table-sm table-nowrap card-table">
            <thead>
              <tr>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-date"
                  >
                    Username
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-total"
                  >
                    Email
                  </span>
                </th>
                <th colspan="2">
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-method"
                  >
                    Joined At
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="list">
              {users.map((user, index) => (
                <UserItem key={index} user={user} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        {users.length > 0 && (
          <div className="card-footer">
            <div className="right float-right text-right">
              <button
                onClick={() => this.onhandelLoadMore(users.length, 2)}
                className="btn btn-sm btn-white"
                type="button"
              >
                <span className="ml-2 mr-2">
                  {loading && <FiLoader color="black" size="19" />}
                </span>
                <span className="ml-2 mr-2">Load More</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    loading: state.user.loading,
    error: state.user.error,
  };
};
export default connect(mapStateToProps, { fetchUsers })(UserList);
