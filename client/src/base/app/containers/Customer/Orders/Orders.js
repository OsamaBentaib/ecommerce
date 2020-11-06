import React, { Component } from 'react'
import OrderItem from './OrderItem';
import { fetchUserOrders } from './../../../../store/actions/order';
import { connect } from 'react-redux';
export class Orders extends Component {
    componentDidMount() {
        this.props.fetchUserOrders()
    }
    render() {
        const { orders, loading } = this.props;
        return (
            <div className="col-lg-8 col-xl-9">
                <table className="table table-hover table-responsive-md">
                    <thead className="bg-light">
                        <tr>
                            <th className="py-4 pl-4 text-sm border-0">Order #</th>
                            <th className="py-4 text-sm border-0">Date</th>
                            <th className="py-4 text-sm border-0">Total</th>
                            <th className="py-4 text-sm border-0">Status</th>
                            <th className="py-4 text-sm border-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && orders.map((order, index) => (
                            <OrderItem
                                key={index + order._id}
                                order={order}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.shoppingOrders,
        error: state.order.error,
        loading: state.order.loading,
    }
}
export default connect(mapStateToProps, { fetchUserOrders })(Orders)
