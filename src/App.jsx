import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Test from "./pages/Test/Test";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <Router>
      <Routes>
        {/* 레이아웃 없이 독립적으로 렌더링 */}
        <Route path="/auth" element={<Auth />} />

        {/* 레이아웃이 적용되는 라우트들 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
