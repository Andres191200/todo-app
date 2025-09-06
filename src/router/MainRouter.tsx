import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../screens/home/Home";
import Auth from "../screens/auth/Auth";


export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />

        </Route>
          <Route index path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}
