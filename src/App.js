import Registrationform from "./components/Registrationform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Registrationform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
