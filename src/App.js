import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";
import About from "./components/About";

const App = () => {
  const pageSize = 5;
  const [Mode, setMode] = useState("light");
  const [progress, setprogress] = useState(0);
  const ToggleMode = function () {
    if (Mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const setProgress = (progress) => {
    setprogress(progress);
  };

  return (
    <div>
      <Router>
        <Navbar togglemode={ToggleMode} mode={Mode} />
        <LoadingBar height={3} color="#008080" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="General"
                name="General"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/Business"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Business"
                name="Business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/Entertainment"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Entertainment"
                name="Entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/General"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Home"
                name="Home"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/Health"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Health"
                name="Health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Science"
                name="Science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/Sports"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Sports"
                name="Sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/Technology"
            element={
              <News
                mode={Mode}
                setProgress={setProgress}
                key="Technology>"
                name="Technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;

// https://newsapi.org/v2/everything?q=tesla&from=2023-11-14&sortBy=publishedAt&api// //key==01df70685ca94a589368db73ef367468
