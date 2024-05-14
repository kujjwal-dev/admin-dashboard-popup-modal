import React, { useState, useEffect } from "react";
import Dashboard from "./component/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./component/Profile";
import Parent from "./component/Parent";
import Category from "./component/Category";
import Upload from "./component/Upload/Upload";
import SpinnerLoader from "./component/SpinnerLoader";
import { HashLoader } from "react-spinners";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setText("Loading");
    }, 5000); //to load some data after some seconds
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="flex items-center w-[100%] h-[100vh] justify-center" ><HashLoader color="#365ed6" loading={loading} size={199} /></div>
      ) : (
        <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="parent" element={<Parent />} />
              <Route path="category" element={<Category />} />
              <Route path="Upload" element={<Upload />} />
            </Route>
          </Routes>
        </Router>
        </div>
      )}
    </div>
  );
}

export default App;
