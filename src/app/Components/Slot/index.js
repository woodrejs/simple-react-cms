import React from "react";
import { Switch } from "react-router-dom";

const Slot = ({ children }) => {
  return (
    <article>
      <Switch>{children}</Switch>
    </article>
  );
};
export default Slot;
