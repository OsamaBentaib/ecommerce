import React, { Component } from "react";
import { Link } from "react-router-dom";
/***
 *  =====================================
 *   This page fetching the categories!
 *   The categories are constants
 *   in the dashboard app they are
 *   the same for adding a new products!
 *   =====================================
 */
export class Categories extends Component {
  render() {
    return (
      <div class="container py-6">
        <div class="row">
          <div class="mb-2 col-6 col-lg-7 pr-1">
            <div
              class="banner aos-init aos-animate"
              style={{ backgroundColor: "#c3e3e0" }}
              data-aos="zoom-in"
            >
              <div class="banner-text p-3 p-lg-5">
                <h2 class="mb-0">Jeans</h2>
              </div>
              <div class="banner-bg"></div>
              <Link
                to="/shop/?categorie=Jeans"
                class="stretched-link banner-link"
              >
                <span class="sr-only">See Jeans</span>
              </Link>
            </div>
          </div>
          <div class="mb-2 col-6 col-lg-5 pl-1">
            <div
              class="banner aos-init aos-animate"
              style={{ backgroundColor: "#f8f0cc" }}
              data-aos="zoom-in"
            >
              <div class="banner-text p-3 p-lg-5">
                <h2 class="mb-0">Watches </h2>
              </div>
              <Link
                to="/shop/?categorie=Watches"
                class="stretched-link banner-link"
              >
                <span class="sr-only">See Watches</span>
              </Link>
            </div>
          </div>
          <div class="mb-2 col-6 col-lg-5 pr-1">
            <div
              class="banner aos-init aos-animate"
              style={{ backgroundColor: "#ffd4d2" }}
              data-aos="zoom-in"
            >
              <div class="banner-text p-3 p-lg-5">
                <h2 class="mb-0">Books </h2>
              </div>
              <Link
                to="/shop/?categorie=Books"
                class="stretched-link banner-link"
              >
                <span class="sr-only">See Books</span>
              </Link>
            </div>
          </div>
          <div class="mb-2 col-6  col-lg-7 pl-1">
            <div
              class="banner aos-init aos-animate"
              style={{ backgroundColor: "#cddeff" }}
              data-aos="zoom-in"
            >
              <div class="banner-text p-3 p-lg-5">
                <h2 class="mb-0">Accesoires </h2>
              </div>
              <Link
                to="/shop/?categorie=Accesoires"
                class="stretched-link banner-link"
              >
                <span class="sr-only">See Accesoires</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Categories;
