import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading">Your {this.props.title}</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
