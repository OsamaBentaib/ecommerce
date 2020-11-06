import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function Traffic(props) {
  const data = {
    labels: ["Canceled", "Being prepared", "Shipped"],
    datasets: [
      {
        data: props.data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <div className="col-12 col-xl-4">
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">Orders Status</h4>
        </div>
        <div className="card-body">
          <Doughnut data={data} className="chart chart-appended" height={340} />
        </div>
      </div>
    </div>
  );
}
