import React, { Component } from 'react'

export class OrderSummary extends Component {
    render() {
        const { subtotal, total, shipping } = this.props;
        return (
            <div className="card shadow-0 border">
                <div className="card-header">
                    <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted text-sm mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
                    <table className="table card-text">
                        <tbody><tr>
                            <th className="py-4">Order Subtotal </th>
                            <td className="py-4 text-right text-muted">${subtotal}</td>
                        </tr>
                            <tr>
                                <th className="py-4">Shipping and handling</th>
                                <td className="py-4 text-right text-muted"> ${shipping}</td>
                            </tr>
                            <tr>
                                <th className="py-4">Tax</th>
                                <td className="py-4 text-right text-muted">$0.00</td>
                            </tr>
                            <tr>
                                <th className="py-4">Total</th>
                                <td className="py-4 text-right h3 font-weight-normal">${total}</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        )
    }
}

export default OrderSummary
