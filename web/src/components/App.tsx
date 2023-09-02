import { render } from "react-dom";

export default function App(props: any) {
  return <div>Hello World! From react</div>;
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
