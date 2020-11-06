import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAnalyse } from "../../../../store/actions/analyse";
import OrdersChart from "./OrdersChart";
import Traffic from "./Traffic";

export default function OrdersAnalyse() {
  const [orderLabels, setOrdersLabels] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersAnalyse());
  }, [dispatch]);
  const Orders = useSelector((state) => state.analyse.Orders);
  useEffect(() => {
    if (Orders) {
      console.log(Orders);
      let oData = [];
      let lab = [];
      Orders.analyse.forEach((e) => {
        oData.push(e.total);
        lab.push(e.date);
      });
      setOrdersLabels(lab);
      setOrdersData(oData);
      setTrafficData([Orders.cancled, Orders.bp, Orders.shipped]);
    }
  }, [Orders]);
  return (
    <div className="row">
      <OrdersChart labels={orderLabels} data={ordersData} />
      <Traffic data={trafficData} />
    </div>
  );
}
