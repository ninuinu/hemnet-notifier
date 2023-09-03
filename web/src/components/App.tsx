import Home from "./Home";
import Notify from "./Notify";
import Search from "./Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(props: any) {
  return (
    <Router>
      <Routes>
        <Route path="/notify" element={<Notify />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
