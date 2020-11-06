import React from "react";
import { Line } from "react-chartjs-2";

export default function OrdersChart(props) {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: "Orders",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(92, 107, 192)",
        borderColor: "rgba(92, 107, 192)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(92, 107, 192)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(92, 107, 192)",
        pointHoverBorderColor: "rgba(92, 107, 192)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: props.data,
      },
    ],
  };
  return (
    <div className="col-12 col-xl-8">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">Orders</h4>
        </div>
        <div className="card-body">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}
