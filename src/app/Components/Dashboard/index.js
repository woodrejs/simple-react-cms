import React from "react";
import Menu from "../Menu";
import styled from "styled-components";

const Styled_Dashboard = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dashboard = ({ menuItems, children }) => {
  return (
    <Styled_Dashboard>
      <Menu>{menuItems}</Menu>
      <section>{children}</section>
    </Styled_Dashboard>
  );
};
export default Dashboard;
