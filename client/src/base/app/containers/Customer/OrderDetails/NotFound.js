import React, { Component } from 'react'

export class NotFound extends Component {
    render() {
        return (
            <section className="hero py-6">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-heading">Not Found</h1>
                        <div>
                            <p className="lead text-muted">
                                This order not found.
                            </p>
                            <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default NotFound
