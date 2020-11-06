import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        const { order } = this.props;
        return (
            <section className="hero py-6">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-heading">Order #{order._id}</h1>
                        <div>
                            <p className="lead text-muted">Order #{order.date} was placed on
                            <strong>
                                    {order.date}</strong> and is currently <strong>Being prepared
                                        </strong>.
                            </p>
                            <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero
