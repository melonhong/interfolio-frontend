import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Test from "./pages/Test/Test";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
