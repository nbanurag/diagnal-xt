import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./components/Home"));
const Movies = lazy(() => import("./components/Movies"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
