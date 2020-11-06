import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountersAnalyse } from "../../../store/actions/analyse";
import Sales from "./Sales";
import Orders from "./Orders";
import Customers from "./Customers";
import Products from "./products";

export default function Counters() {
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [sales, setSales] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountersAnalyse());
  }, [dispatch]);
  // { orders: 1, products: 2, users: 1, sallers: 196 }
  const counters = useSelector((state) => state.analyse.Counters);
  useEffect(() => {
    if (counters) {
      setUsers(counters.users);
      setProducts(counters.products);
      setOrders(counters.orders);
      setSales(counters.sallers);
    }
  }, [counters]);
  return (
    <div className="row">
      <Sales count={sales} />
      <Orders count={orders} />
      <Customers count={users} />
      <Products count={products} />
    </div>
  );
}
