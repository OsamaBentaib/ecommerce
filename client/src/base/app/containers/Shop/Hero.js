import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <div className="hero-content pb-5">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Hero;
