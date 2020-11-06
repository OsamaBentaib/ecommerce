import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class OrderItem extends Component {
    render() {
        const { order } = this.props;
        return (
            <tr>
                <th className="pl-4 py-5 align-middle"># 1735</th>
                <td className="py-5 align-middle">22/6/2017</td>
                <td className="py-5 align-middle">$150.00</td>
                <td className="py-5 align-middle">
                    <span className="badge badge-info-light">
                        Being prepared
                    </span>
                </td>
                <td className="py-5 align-middle">
                    <Link
                        to={`?tab=order_details&order=${order._id}`}
                        className="btn btn-outline-dark btn-sm">
                        View
                    </Link>
                </td>
            </tr>
        )
    }
}

export default OrderItem
