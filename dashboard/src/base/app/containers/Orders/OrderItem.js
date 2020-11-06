import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import moment from "moment";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../../store/actions/orders";
export default function OrderItem(props) {
  const [order, setOrder] = useState(props.order);
  const { index } = props;
  const dispatch = useDispatch();
  const onUpdate = (status, Id) => {
    const up = {
      ...order,
      status: status,
    };
    console.log(Id);
    dispatch(updateOrder(status, Id));
    setOrder(up);
  };
  const bpre = <div className="badge badge-soft-primary"> {order.status} </div>;
  const cancled = (
    <div className="badge badge-soft-danger"> {order.status} </div>
  );
  const shipped = (
    <div className="badge badge-soft-warning"> {order.status} </div>
  );
  const aneeded = (
    <div className="badge badge-soft-secondary"> {order.status} </div>
  );
  return (
    <tr>
      <td className="orders-order"> #{index + 1} </td>
      <td className="orders-date">
        <time dateTime="2018-07-30">
          {" "}
          {moment(order.date).format("DD MMM YYYY")}{" "}
        </time>
      </td>
      <td className="orders-total">$ {order.total}</td>
      <td className="orders-status">
        {order.status === "Action needed" && aneeded}
        {order.status === "Being prepared" && bpre}
        {order.status === "Cancled" && cancled}
        {order.status === "Shipped" && shipped}
      </td>
      <td className="orders-method"> {order.paymentMethod} </td>
      <td className="text-right">
        <div className="dropdown">
          <button
            className="dropdown-ellipses btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-Expanded="false"
          >
            <FiMoreVertical />
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button
              onClick={() =>
                onUpdate(
                  order.status === "Action needed"
                    ? "Being prepared"
                    : "Being prepared"
                    ? "Shipped"
                    : "",
                  order._id
                )
              }
              className="dropdown-item btn"
            >
              {" "}
              {order.status === "Action needed"
                ? "set as Being prepared"
                : "Being prepared"
                ? "set as Shipped"
                : ""}{" "}
            </button>
            <button
              onClick={() => onUpdate("Cancled", order._id)}
              className="dropdown-item text-danger"
            >
              Cancel
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
