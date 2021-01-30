import React from "react";
import Menu from "../Menu";

const Dashboard = ({ menuItems, children }) => {
  return (
    <div>
      <Menu>{menuItems}</Menu>
      <section>{children}</section>
    </div>
  );
};
export default Dashboard;
