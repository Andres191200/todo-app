import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../screens/Home";

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
