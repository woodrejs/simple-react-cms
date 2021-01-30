import React from "react";
import { Route } from "react-router-dom";

const Panel_Product = ({ getPath, putPath, inputs }) => {
  return (
    <Route path={getPath}>
      <div>content</div>
    </Route>
  );
};
export default Panel_Product;
