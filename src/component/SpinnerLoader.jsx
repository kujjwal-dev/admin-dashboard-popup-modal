import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const SpinnerLoader = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setText("Loading");
    }, 3000); //to load some data after some seconds
  }, []);

  return <div>{
    loading ? 
      <img
        src=""
        alt="loading"
      />
      : <h3>{text}</h3>
    }</div>;
};

export default SpinnerLoader;


// basic concept of adding loader is this