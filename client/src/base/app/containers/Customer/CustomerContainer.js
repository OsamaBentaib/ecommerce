import React, { Component, Fragment } from 'react'
import Hero from './Hero'
import Orders from './Orders/Orders'
import SideBar from './SideBar'
import Profile from './Profile/Profile'
import Addresses from './Addresses/Addresses'
import OrderDetails from './OrderDetails/OrderDetails'
import { withRouter } from 'react-router-dom'

export class CustomerContainer extends Component {
    state = {
        orders: true,
        profile: false,
        addresses: false,
        orderDetails: false,
    }
    render() {
        const { history } = this.props;
        let tab = "orders";
        let orderId;
        if (history.location.search) {
            const queryArray = history.location.search.split('?')[1].split('&');
            let queryParams = {};
            for (let i = 0; i < queryArray.length; i++) {
                const [key, val] = queryArray[i].split('=');
                queryParams[key] = val ? val : true;
            }
            if (queryParams["tab"] !== null) {
                tab = queryParams["tab"];
            }
            if (queryParams["tab"] === "order_details") {
                orderId = queryParams["order"];
                console.log("orderDetails " + orderId);
            }
        }
        return (
            <Fragment>
                {tab !== "order_details" && <Hero title="Orders" />}
                <section className="pb-6">
                    <div className="container">
                        <div className="row">
                            {tab === "orders" && <Orders />}
                            {tab === "profile" && <Profile />}
                            {tab === "address" && <Addresses />}
                            {tab === "order_details" && <OrderDetails order={orderId} />}
                            <div className="col-xl-3 col-lg-4 mb-5">
                                <SideBar
                                    orders={tab === "orders" ? true : false}
                                    profile={tab === "profile" ? true : false}
                                    addresses={tab === "address" ? true : false}
                                />
                            </div>
                        </div >
                    </div >
                </section >
            </Fragment>
        )
    }
}

export default withRouter(CustomerContainer)
