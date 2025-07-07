import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Test from "./pages/Test/Test";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
