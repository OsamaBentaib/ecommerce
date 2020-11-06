import React, { Fragment, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getActivitiesAnalyse } from "../../../../store/actions/analyse";

export default function Activities() {
  const [labels, setLabels] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const [users, setUsers] = useState({
    label: "Users",
    fill: false,
    backgroundColor: "rgba(39, 174, 96 )",
    borderColor: "rgba(39, 174, 96 )",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(39, 174, 96 )",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(39, 174, 96 )",
    pointHoverBorderColor: "rgba(39, 174, 96 )",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [],
  });
  const [deleted, setDeleted] = useState({
    label: "Deleted",
    fill: false,
    backgroundColor: "rgba(231, 76, 60)",
    borderColor: "rgba(231, 76, 60)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(231, 76, 60)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(231, 76, 60)",
    pointHoverBorderColor: "rgba(231, 76, 60)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [],
  });
  const [visitors, setVisitors] = useState({
    label: "Visitors",
    fill: false,
    backgroundColor: "rgba(244, 208, 63)",
    borderColor: "rgba(244, 208, 63)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(244, 208, 63)",
    pointBackgroundColor: "rgba(244, 208, 63)",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(244, 208, 63)",
    pointHoverBorderColor: "rgba(244, 208, 63)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [],
  });
  const analyse = useSelector((state) => state.analyse.Activities);
  useEffect(() => {
    if (analyse.length > 0 && !isUpdated) {
      setIsUpdated(true);
      let Newlabels = [];
      let Newusers = [];
      let Newdeleted = [];
      let Newvisitors = [];
      analyse.forEach((e) => {
        Newlabels.push(e.labels);
        Newusers.push(e.users);
        Newdeleted.push(e.deletedUsers);
        Newvisitors.push(e.visitors);
      });
      setLabels(Newlabels);
      setDeleted({ ...deleted, data: Newdeleted });
      setUsers({ ...users, data: Newusers });
      setVisitors({ ...visitors, data: Newvisitors });
    }
  }, [analyse, deleted, users, visitors, isUpdated]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivitiesAnalyse());
  }, [dispatch]);
  const data = { labels: labels, datasets: [users, deleted, visitors] };
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="header-body">
            <div className="row align-items-end">
              <div className="col">
                <h6 className="header-pretitle text-secondary">Overview</h6>
                <h1 className="header-title">Activities</h1>
              </div>
            </div>
          </div>
          <div className="header-footer mb-5 pb-5">
            <div className="chart">
              <Line data={data} height={100} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
