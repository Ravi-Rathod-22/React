import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "intro" },
  "Hello, My Name Is Ravi Rathod"
);

const heading2 = React.createElement(
  "h2",
  { id: "description" },
  "I am here to learn React"
);

const heading3 = React.createElement(
  "h3",
  { id: "use" },
  "Using CreateElement"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
  heading3,
]);

const jsx = (
  <div className="title">
    <h1>Hello, My Name Is Ravi Rathod</h1>
    <h2>I am here to learn React</h2>
    <h3>Using JSX</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([container, jsx]);
