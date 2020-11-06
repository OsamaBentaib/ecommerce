import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class OrderCartItem extends Component {
    render() {
        return (
            <div className="cart-item">
                <div className="row d-flex align-items-center text-center">
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <Link to="/product/1/" href="detail.html">
                                <img className="cart-item-img" src={require("./../../../../../assets/images/book.jpg")} alt="..." />
                            </Link>
                            <div className="cart-title text-left">
                                <Link to="/product/1/" className="text-dark">
                                    <strong>Transparent Blouse</strong>
                                </Link>
                                <br />
                                <span className="text-muted text-sm">Size: Medium</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">$55.00</div>
                    <div className="col-2">3
                      </div>
                    <div className="col-2 text-center">$165.00</div>
                </div>
            </div>
        )
    }
}

export default OrderCartItem
