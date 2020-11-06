import React, { Component, Fragment } from "react";
import Categories from "../containers/Home/Categories";
import LatestProducts from "../containers/Home/LatestProducts";
import Hero from "../containers/Home/Hero";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <Hero />
          <Categories />
          <LatestProducts />
        </div>
      </Fragment>
    );
  }
}

export default Home;
