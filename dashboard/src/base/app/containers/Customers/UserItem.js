import React from "react";
import moment from "moment";
export default function UserItem(props) {
  const { user } = props;
  return (
    <tr>
      <td className="users-user"> {user.username} </td>
      <td className="users-user"> {user.email} </td>
      <td className="users-date">
        <time dateTime="2018-07-30">
          {" "}
          {moment(user.joinedAt).format("DD MMM YYYY")}{" "}
        </time>
      </td>
    </tr>
  );
}
