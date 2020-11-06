import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsBag, BsHeart, BsPerson } from "react-icons/bs";
import SidebarCartModal from "./../Cart/SidebarCartModal";
import { ReactComponent as Brand } from "./../../../../assets/svg/Evin.svg";
export class Header extends Component {
  state = {
    isCard: false,
  };
  onhandelCartClose = () => {
    this.setState({ isCard: false });
  };
  onhandelCartOpen = () => {
    this.setState({ isCard: true });
  };
  render() {
    const { isCard } = this.state;
    const { shoppingCart, shoppingWishlist, token } = this.props;
    return (
      <Fragment>
        <header className="header w-100">
          <nav className="navbar navbar-expand-lg shadow-0 navbar-light bg-white px-lg-5">
            <Link to="/" className="navbar-brand">
              <Brand height="30px" />
            </Link>
            <ul className="list-inline mb-0 d-block d-lg-none">
              <li className="list-inline-item mr-3">
                <Link
                  to="/auth/"
                  className="list-inline-item mr-3 btn btn-outline-primary"
                >
                  Login
                </Link>
              </li>
              <li className="list-inline-item mr-3">
                <span className="text-dark text-hover-primary position-relative">
                  <div className="navbar-icon-badge">
                    {shoppingWishlist.length}
                  </div>
                  <BsHeart size="20" />
                </span>
              </li>
              <li className="list-inline-item position-relative mr-3">
                <span
                  className="text-dark text-hover-primary"
                  onClick={() => this.onhandelCartOpen()}
                >
                  <div className="navbar-icon-badge">{shoppingCart.length}</div>
                  <BsBag size="20" />
                </span>
              </li>
            </ul>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav mt-3 mt-lg-0">
                <li className="nav-item dropdown position-static">
                  <Link to="/shop/" className="nav-link">
                    Shop
                  </Link>
                </li>
              </ul>
              <div className="d-lg-flex ml-auto mr-lg-5 mr-xl-6 my-4 my-lg-0"></div>
              <ul className="list-inline mb-0 d-none d-lg-block">
                <li className="list-inline-item mr-3">
                  {token ? (
                    <Link to="/customer/" className="mr-3">
                      <BsPerson size="25" />
                    </Link>
                  ) : (
                    <Link
                      to="/login/"
                      className="list-inline-item mr-3 btn btn-outline-dark"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li className="list-inline-item mr-3">
                  <Link to="/wishlist/">
                    <span className="text-dark text-hover-primary position-relative">
                      <div className="navbar-icon-badge">
                        {shoppingWishlist.length}
                      </div>
                      <BsHeart size="20" />
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item position-relative mr-3">
                  <span
                    className="text-dark text-hover-primary"
                    onClick={() => this.onhandelCartOpen()}
                  >
                    <div className="navbar-icon-badge">
                      {shoppingCart.length}
                    </div>
                    <BsBag size="20" />
                  </span>
                </li>
                <li className="list-inline-item">
                  <span className="text-dark text-hover-primary"></span>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {isCard && (
          <SidebarCartModal onhandelCartClose={this.onhandelCartClose} />
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    shoppingCart: state.cart.shoppingCart,
    shoppingWishlist: state.wishlist.shoppingWishlist,
  };
};
export default connect(mapStateToProps, {})(Header);
