import React, { Component, Fragment } from 'react'
import OrderCartItem from './OrderCartItem'
import OrderSummary from './OrderSummary'
import OrderAddress from './OrderAddress'
import Hero from './Hero'
import { connect } from 'react-redux'
import { fetchOrderDetails } from './../../../../store/actions/order'
import NotFound from './NotFound'
import OrderDetailsLoading from '../../../components/Loading/OrderDetailsLoading'
export class OrderDetails extends Component {
    componentDidMount() {
        this.props.fetchOrderDetails(this.props.order);
    }
    render() {
        const { loading, orderDetails, notFound } = this.props;
        const items = orderDetails.items === undefined ? [] : orderDetails.items;
        if (loading) return <OrderDetailsLoading />
        if (!notFound) {
            const total = orderDetails.total;
            const shipping = 10.00;
            const subtotal = total - shipping;
            return (
                <Fragment>
                    <Hero order={orderDetails} />
                    <div className="col-lg-8 col-xl-9">
                        <div className="cart">
                            <div className="cart-wrapper">
                                <div className="cart-header">
                                    <div className="row">
                                        <div className="col-6">Item</div>
                                        <div className="col-2 text-center">Price</div>
                                        <div className="col-2 text-right">Quantity</div>
                                        <div className="col-2 text-right">Total</div>
                                    </div>
                                </div>
                                <div className="cart-body">
                                    {!loading && items.map((item, index) => (
                                        <OrderCartItem key={index} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-6">
                                <OrderSummary subtotal={subtotal} total={total} shipping={shipping} />
                            </div>
                            <div className="col-md-6">
                                <OrderAddress address={orderDetails.address === undefined ? {} : orderDetails.address} />
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <NotFound />
                </Fragment>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        orderDetails: state.order.orderDetails,
        loading: state.order.orderDetailsLoading,
        notFound: state.order.notFound,
    }
}
export default connect(mapStateToProps, { fetchOrderDetails })(OrderDetails)
