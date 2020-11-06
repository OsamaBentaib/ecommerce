import React, { Fragment } from "react";
import Activities from "./activities/Activities";
import Counters from "../Cards/Counters";
import OrdersAnalyse from "./OrdersChart/OrdersAnalyse";

export default function Dashboard() {
  return (
    <Fragment>
      <Activities />
      <div className="container mt-4">
        <OrdersAnalyse />
        <Counters />
      </div>
    </Fragment>
  );
}
