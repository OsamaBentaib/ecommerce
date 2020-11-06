import React, { Component } from "react";
import { BsTrash, BsCheck } from "react-icons/bs";
export class AddressItem extends Component {
  render() {
    const {
      address,
      index,
      onhandelRemoveAddress,
      onhandelSelectAddress,
      isSelected,
      selector,
    } = this.props;
    return (
      <div className="col-md-6 mt-3 shadow-0">
        <div className="card shadow-0 border">
          <div className="card-header card-header-options">
            <div className="row align-items-center">
              <div className="col">
                <span>Address {index}</span>
              </div>
              {selector ? (
                <div className="col text-right float-right">
                  <span
                    onClick={() => onhandelSelectAddress(address)}
                    style={{
                      width: 25,
                      height: 25,
                      background: isSelected ? "black" : "",
                    }}
                    className="border pointer text-center align-item-center"
                  >
                    <BsCheck
                      size="19"
                      className="pb-1"
                      color={isSelected ? "white" : ""}
                    />
                  </span>
                </div>
              ) : (
                <div className="col text-right">
                  <button
                    onClick={() => onhandelRemoveAddress(address)}
                    type="button"
                    className="btn btn-ico"
                  >
                    <span>
                      <BsTrash size="18" />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="card-body p-4">
            <h6 className="card-text text-muted">Where</h6>
            <p className="card-text">
              1620 East Ayre Str Suite M3115662 Wilmington, DE 19804 United
              States
            </p>
            <h6 className="card-text text-muted">To</h6>
            <p className="card-text">Michael Doe</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddressItem;
