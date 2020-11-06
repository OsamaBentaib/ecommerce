import React, { Component } from "react";
import { FiLoader, FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import { fetchOrders } from "./../../../store/actions/orders";
import OrderItem from "./OrderItem";
export class OrdersList extends Component {
  componentDidMount() {
    this.props.fetchOrders(0, 2);
  }
  onhandelLoadMore = (s, l) => {
    this.props.fetchOrders(s, l);
  };
  onhandelUpdateOrder = (_id, to) => {};
  render() {
    const { orders, loading } = this.props;
    console.log(orders);
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
                    data-sort="orders-order"
                  >
                    Order
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-date"
                  >
                    Date
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-total"
                  >
                    Total
                  </span>
                </th>
                <th>
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-status"
                  >
                    Status
                  </span>
                </th>
                <th colspan="2">
                  <span
                    className="text-muted list-sort"
                    data-sort="orders-method"
                  >
                    Payment method
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="list">
              {orders.map((order, index) => (
                <OrderItem key={index} order={order} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        {orders.length > 0 && (
          <div className="card-footer">
            <div className="right float-right text-right">
              <button
                onClick={() => this.onhandelLoadMore(orders.length, 2)}
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
    orders: state.order.orders,
    loading: state.order.loading,
    error: state.order.error,
  };
};
export default connect(mapStateToProps, { fetchOrders })(OrdersList);
