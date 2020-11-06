import React, { Component } from 'react'

export class OrderAddress extends Component {
    render() {
        const { address } = this.props;
        return (
            <div className="card mb-5 shadow-0 border">
                <div className="card-header">
                    <h5 className="mb-0">Shipping address</h5>
                </div>
                <div className="card-body p-4">
                    <p className="card-text text-muted">{address.name}<br />
                        {address.address} {address.zipCode}<br />
                        {address.comment}
                        {address.city} {address.state} {address.country}<br />
                        <strong>{address.phone}</strong></p>
                </div>
            </div>
        )
    }
}
export default OrderAddress
