import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [cat, setCat] = useState("");

  const handleClick = async () => {
    try {
      const catRes = await axios.get("https://aws.random.cat/meow");
      setCat(catRes.data.file);
    } catch (error) {
      // nope
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="imageC">
          <img src={cat} alt="cat" />
        </div>
        <div className="buttonDiv">
          <button type="button" onClick={handleClick}>
            {cat ? "Next Cat" : "Get Cat"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
