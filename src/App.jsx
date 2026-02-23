import { Routes, Route } from "react-router-dom";
import BMI from "./components/BMI";
import Result from "./components/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BMI />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;