import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as I from "./../../../store/constants";

export class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div class="item col-xl-3 col-lg-4 col-6">
                <div class="product aos-init aos-animate" data-aos="zoom-in" data-aos-delay="0">
                    <div class="product-image mb-md-3">
                        <Link to={`/product/${product._id}/`}>
                            <img class="img-fluid" src={`${I.PROXY_URL}/media/${product.image1}`} alt="product" />
                        </Link>
                        <div class="product-hover-overlay">
                            <Link to={`/product/${product._id}/`} class="text-dark text-sm">
                                <span class="d-none d-sm-inline">Add to cart</span>
                            </Link>
                        </div>
                    </div>
                    <div class="position-relative">
                        <h3 class="text-base mb-1">
                            <Link to={`/product/${product._id}/`} class="text-dark">Norwegg Chair</Link>
                        </h3>
                        <span class="text-gray-500 text-sm">$40.00</span>
                    </div>
                </div >
            </div >
        )
    }
}

export default Product
