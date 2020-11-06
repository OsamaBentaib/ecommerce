import React, { Component, Fragment } from 'react'
import ProductDetails from '../containers/ProductDetails/ProductDetails'
import { withRouter } from 'react-router-dom'

export class Product extends Component {
    render() {
        const { match } = this.props;
        return (
            <Fragment>
                <ProductDetails match={match} />
            </Fragment>
        )
    }
}

export default withRouter(Product)
