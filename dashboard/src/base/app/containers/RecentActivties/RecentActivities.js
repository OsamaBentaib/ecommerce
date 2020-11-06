import React, { Component } from 'react'

export class RecentActivities extends Component {
    render() {
        return (
            <div className="col-12 col-xl-4">

                <div className="card-adjust-xl">
                    <div className="card">
                        <div className="card-header">

                            <h4 className="card-header-title">
                                Recent Activity
                            </h4>
                        </div>
                        <div className="card-body">

                            <div className="list-group list-group-flush my-n3">
                                <div className="list-group-item">
                                    <div className="row">
                                        <div className="col ml-n2">

                                            <div className="small">
                                                New order placed by <strong>Dianna Smiley</strong>.
                                            </div>

                                            <small className="text-muted">
                                                2m ago
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item">
                                    <div className="row">
                                        <div className="col ml-n2">

                                            <div className="small">
                                                New order placed by <strong>Dianna Smiley</strong>.
                        </div>

                                            <small className="text-muted">
                                                2m ago
                        </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default RecentActivities
