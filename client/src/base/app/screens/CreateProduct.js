import React, { Component } from 'react'

export class CreateProduct extends Component {
    render() {
        return (
            <div className="row">
                <ProductImage />
                <div className="col-lg-6 col-xl-4 pt-4 order-1 order-lg-2 ml-lg-auto">
                    <div className="sticky-top" style={{ top: "100px" }}>
                        <h1 className="mb-4">Push-up Jeans</h1>
                        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
                            <ul className="list-inline mb-2 mb-sm-0">
                                <li className="list-inline-item h4 font-weight-light mb-0">
                                    ${product.price}
                                </li>
                            </ul>
                        </div>
                        <p className="mb-4 text-muted">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                        <div className="row">
                            <div className="col-sm-6 col-lg-12 detail-option mb-4">
                                <h6 className="detail-option-heading">Size <span>(required)</span>
                                </h6>
                                <div className="btn-group-toggle btn-group-square">
                                    {product.availableSizes.map((size, index) => (
                                        <span
                                            key={index + size.size}
                                            onClick={(e) => this.onhandelSizeChange(size.size)}
                                            className={`btn mr-1 text-center align-center ${selectedSize === size.size && "border"}`}>
                                            <span>{size.size}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-12 detail-option mb-4">
                                <h6 className="detail-option-heading">Color <span>(required)</span>
                                </h6>
                                <div className="btn-group-toggle btn-group-square" data-toggle="buttons">
                                    <ul className="list-inline mb-0 colours-wrapper">
                                        {product.availableColors.map((color, index) => (
                                            <li
                                                key={index + color.code}
                                                onClick={(e) => this.onhandelColorChange(color.name)}
                                                className="list-inline-item">
                                                <span
                                                    className={`btn-colour ${selectedColor === color.name && 'active'}`}
                                                    style={{ backgroundColor: color.code }}>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {OnhandelAddToCartError &&
                            <div className="alert alert-danger">
                                {OnhandelAddToCartError}
                            </div>
                        }
                        <div className="input-group w-100 mb-4">
                            <input
                                className="form-control form-control-lg detail-quantity"
                                type="number"
                                value={quantity}
                                onChange={(e) => this.onhandelQuantityChange(e)}
                            />
                            <div className="input-group-append flex-grow-1">
                                <button
                                    onClick={
                                        () => onhandelAddToCart({
                                            productId: product._id,
                                            size: selectedSize,
                                            color: selectedColor,
                                            quantity: quantity,
                                        }, product.name)}
                                    className={`btn btn-dark btn-block ${addToCartLoading && "disabled"}`}
                                    type="button"
                                >
                                    <span className="mr-2 mb-1">
                                        <BsBag size="17" />
                                    </span>
                                    {addToCartLoading ? "Adding to Cart..." : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <strong>
                                    Category :
                                            </strong>
                                <Link to="/Books/Products/" className="text-muted"> Jeans</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProduct
