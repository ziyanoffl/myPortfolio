import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders the portfolio without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.textContent).toContain("Ziyan Rilwan");
  expect(div.querySelector("#contact")).not.toBeNull();
  ReactDOM.unmountComponentAtNode(div);
});
