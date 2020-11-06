import React, { Component } from "react";
import ImageForm from "./ImageForm";
import { connect } from "react-redux";
import { postProduct } from "./../../../store/actions/products";
export class NewProductContainer extends Component {
  state = {
    image1: null,
    image2: null,
    image1Fd: null,
    image2Fd: null,
    colors: [
      { name: "blue", code: "#007bff" },
      { name: "indigo", code: " #6610f2" },
      { name: "purple", code: "#6f42c1" },
      { name: "pink", code: "#e83e8c" },
      { name: "red", code: "#dc3545" },
      { name: "orange", code: "#fd7e14" },
      { name: "yellow", code: "#ffc107" },
      { name: "green", code: "#28a745" },
      { name: "teal", code: "#20c997" },
      { name: "cyan", code: "#17a2b8" },
      { name: "white", code: "#fff" },
      { name: "gray", code: "#868e96" },
      { name: "dark", code: "#343a40" },
    ],
    sizes: [
      { size: "S" },
      { size: "M" },
      { size: "L" },
      { size: "XL" },
      { size: "XXL" },
    ],
    selectedSizes: [],
    selectedColors: [],
    name: "",
    price: 0,
    description: "",
    categories: [
      { name: "Jeans" },
      { name: "Watches" },
      { name: "Books" },
      { name: "Accesoires" },
    ],
    selectedCategorie: null,
    err: null,
  };
  onhandelColor = (color) => {
    let selectedColors = this.state.selectedColors;
    const findColor = selectedColors.indexOf(color, 0);
    if (findColor !== -1) {
      selectedColors.splice(findColor);
    } else {
      selectedColors.push(color);
    }
    this.setState({ selectedColors: selectedColors });
  };
  onhandelSize = (size) => {
    let selectedSizes = this.state.selectedSizes;
    const findSize = selectedSizes.indexOf(size, 0);
    if (findSize !== -1) {
      selectedSizes.splice(findSize);
    } else {
      selectedSizes.push(size);
    }
    this.setState({ selectedSizes: selectedSizes });
  };
  onhandelCategorie = (e) => {
    this.setState({ selectedCategorie: e });
  };
  onhandelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onhandelSubmit = (e) => {
    const {
      image1Fd,
      image2Fd,
      name,
      price,
      description,
      selectedCategorie,
      selectedColors,
      selectedSizes,
    } = this.state;
    if (
      name ||
      price ||
      description ||
      selectedSizes ||
      selectedColors ||
      selectedCategorie ||
      selectedColors ||
      selectedCategorie
    ) {
      const fd = new FormData();
      fd.append("image1", image1Fd, image1Fd.name);
      fd.append("image2", image2Fd, image2Fd.name);
      fd.append("name", name);
      fd.append("price", price);
      fd.append("description", description);
      fd.append("selectedCategorie", selectedCategorie);
      fd.append("selectedColors", JSON.stringify(selectedColors));
      fd.append("selectedSizes", JSON.stringify(selectedSizes));
      this.props.postProduct(fd);
    } else {
      this.setState({ err: "Please fill all the fields!" });
    }
  };
  onDropImage1 = (e) => {
    const image = e[0];
    this.setState({ image1Fd: image });
    Object.assign(image, {
      preview: URL.createObjectURL(image),
    });
    this.setState({ image1: image });
  };
  onDropImage2 = (e) => {
    const image = e[0];
    this.setState({ image2Fd: image });
    Object.assign(image, {
      preview: URL.createObjectURL(image),
    });
    this.setState({ image2: image });
  };
  render() {
    const {
      image1,
      image2,
      name,
      price,
      description,
      colors,
      sizes,
      selectedCategorie,
      selectedColors,
      selectedSizes,
      categories,
      err,
    } = this.state;
    const { loading } = this.props;
    return (
      <section>
        <div className="container-fluid px-xl-7 pt-5 pb-3 pb-lg-6">
          <div className="row">
            <div className="col-lg-6 col-xl-7 pt-4 order-2 order-lg-1 photoswipe-gallery">
              <div className="d-block mb-4 rounded">
                <ImageForm
                  onDropImage={this.onDropImage1.bind(this)}
                  image={image1}
                />
              </div>
              <div className="d-block mb-4 rounded">
                <ImageForm
                  onDropImage={this.onDropImage2.bind(this)}
                  image={image2}
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 pt-4 order-1 order-lg-2 ml-lg-auto">
              <div className="sticky-top" style={{ top: "100px" }}>
                <div class="form-group">
                  <label class="form-label">Name</label>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => this.onhandelChange(e)}
                    class="form-control"
                    placeholder="Product name"
                  />
                </div>
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between">
                  <div class="form-group">
                    <label class="form-label">Price</label>
                    <input
                      type="number"
                      value={price}
                      name="price"
                      onChange={(e) => this.onhandelChange(e)}
                      class="form-control"
                      placeholder="00.00"
                    />
                  </div>
                </div>
                <label className="detail-option-heading">
                  Description <span>(required)</span>
                </label>
                <div className="card border p-3">
                  <div class="form-group">
                    <textarea
                      name="description"
                      value={description}
                      onChange={(e) => this.onhandelChange(e)}
                      class="form-control form-control-flush form-control-auto"
                      data-autosize=""
                      rows="3"
                      placeholder="Description..."
                      style={{
                        overflow: "hidden",
                        overflowWrap: "break-word",
                        height: "68px",
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-12 detail-option mb-4">
                    <label className="detail-option-heading">
                      Sizes <span>(required)</span>
                    </label>
                    <div className="btn-group-toggle btn-group-square">
                      {sizes.map((size, i) => {
                        const isSelected = selectedSizes.indexOf(size, 0);
                        return (
                          <span
                            onClick={() => this.onhandelSize(size)}
                            key={i}
                            className={`btn mr-3 border text-center align-center kbackgound ${
                              isSelected !== -1 && "active"
                            }`}
                          >
                            <span>{size.size}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-12 detail-option mb-4">
                    <h6 className="detail-option-heading">
                      Color <span>(required)</span>
                    </h6>
                    <div
                      className="btn-group-toggle btn-group-square"
                      data-toggle="buttons"
                    >
                      <ul className="list-inline mb-0 colours-wrapper">
                        {colors.map((color, i) => {
                          const isSelected = selectedColors.indexOf(color, 0);
                          return (
                            <li key={i} className="list-inline-item">
                              <span
                                onClick={() => this.onhandelColor(color)}
                                className={`btn-colour ${
                                  isSelected !== -1 && "active"
                                }`}
                                style={{ backgroundColor: color.code }}
                              ></span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <ul className="list-unstyled bt-1">
                      <li>
                        <strong>Category</strong>
                      </li>
                    </ul>
                    <div className="btn-group-toggle btn-group-square">
                      {categories.map((Categorie, i) => {
                        const isSelected =
                          Categorie.name === selectedCategorie ? true : false;
                        return (
                          <span
                            onClick={() =>
                              this.onhandelCategorie(Categorie.name)
                            }
                            key={i}
                            className={`btn mr-3 border text-center align-center kbackgound ${
                              isSelected && "active"
                            }`}
                          >
                            <span>{Categorie.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {err && (
                  <div className="alert alert-danger">
                    <span>{err}</span>
                  </div>
                )}
                <div className="input-group w-100 mb-4">
                  <div className="flex-grow-1">
                    <button
                      disabled={loading}
                      onClick={() => this.onhandelSubmit()}
                      className={`btn btn-dark btn-block`}
                      type="button"
                    >
                      {loading ? "Creating Product..." : "Create Product"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.product.loading,
    error: state.product.error,
    success: state.product.success,
  };
};
export default connect(mapStateToProps, { postProduct })(NewProductContainer);
