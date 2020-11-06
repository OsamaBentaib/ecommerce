import React, { Component, Fragment } from 'react'
import ShopContainer from '../containers/Shop/ShopContainer'
import { withRouter } from 'react-router-dom'

export class Shop extends Component {
    render() {
        const { history } = this.props;
        return (
            <Fragment>
                <ShopContainer
                    history={history}
                />
            </Fragment>
        )
    }
}

export default withRouter(Shop)
