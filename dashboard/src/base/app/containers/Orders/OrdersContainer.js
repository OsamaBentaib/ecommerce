import React, { Component } from 'react'
import OrdersHeader from './OrdersHeader'
import OrdersList from './OrdersList'


export class OrdersContainer extends Component {
    
    render() {
        const { orders } = this.props;
        return (
            <div>
                <OrdersHeader />
                <OrdersList orders={orders} />
            </div>
        )
    }
}

export default OrdersContainer
