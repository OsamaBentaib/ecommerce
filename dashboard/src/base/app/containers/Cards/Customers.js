import React, { Component } from 'react'

export class Customers extends Component {
    render() {
        return (
            <div className="col-12 col-lg-6 col-xl">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col">
                                <h6 className="text-uppercase text-muted mb-2">
                                    Total Customers
                                 </h6>
                                <span className="h2 mb-0">
                                    {this.props.count}
                                </span>
                            </div>
                            <div className="col-auto">
                                <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Customers
