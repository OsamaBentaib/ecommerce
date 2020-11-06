import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../../store/actions/products";
import { PROXY_URL } from "./../../../store/constants";
export default function ProductItem(props) {
  const [product, setProduct] = useState(props.product);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();
  const onUpdate = (status, id) => {
    const up = {
      ...product,
      inStok: status,
    };
    console.log(status);
    dispatch(updateProduct(status, id));
    setProduct(up);
  };
  const onDelete = (_id) => {
    setIsDeleted(true);
    dispatch(deleteProduct(_id));
  };
  if (isDeleted) return <div></div>;
  return (
    <tr>
      <td className="products-product">
        <div className="d-flex align-items-center">
          <div className="avatar">
            <img
              className="avatar-img rounded mr-3"
              src={`${PROXY_URL}/media/${product.image1}`}
              alt="..."
            />
          </div>
          <div className="ml-3 avatar">
            <img
              className="avatar-img rounded mr-3"
              src={`${PROXY_URL}/media/${product.image2}`}
              alt="..."
            />
          </div>
        </div>
      </td>
      <td className="products-product">
        <h4 className="font-weight-normal mb-1">{product.name}</h4>
      </td>
      <td className="products-product">
        <h4 className="font-weight-normal mb-1">
          {moment(product.date).format("DD MMM YYYY")}
        </h4>
      </td>
      <td className="products-stock">
        {product.inStok ? (
          <span className="badge badge-soft-success">in Stock</span>
        ) : (
          <span className="badge badge-soft-danger">out Stock</span>
        )}
      </td>
      <td className="products-price">${product.price}</td>
      <td>
        <div className="dropdown">
          <button
            className="dropdown-ellipses btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FiMoreVertical />
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button
              onClick={() => onUpdate(!product.inStok, product._id)}
              className="dropdown-item btn"
            >
              Set as{" "}
              {product.inStok ? (
                <span className="text-danger">out stock</span>
              ) : (
                <span className="text-success">in stock</span>
              )}
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="dropdown-item btn text-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
