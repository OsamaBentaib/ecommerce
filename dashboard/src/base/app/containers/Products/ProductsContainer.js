import React, { Component } from 'react'
import ProductsHeader from './ProductsHeader'
import ProductsList from './ProductsList'

export class ProductsContainer extends Component {
    render() {
        return (
            <div>
                <ProductsHeader />
                <ProductsList />
            </div>
        )
    }
}

export default ProductsContainer
