import React from "react";
import "./Grid.css";

export const Container = ({fluid, children}) => (
  <div className={`topContainer container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);