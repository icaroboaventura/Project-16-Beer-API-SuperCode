import "./App.css";

import Home from "./pages/Home/Home";
import AllBeers from "./pages/AllBeers/AllBeers";
import DetailPage from "./pages/Detailpage/Detailpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllBeers />} />
          <Route path="/all/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
