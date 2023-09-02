import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const Root: React.FC = () => {
  return <App />;
};

render(<Root />, document.getElementById("root"));
