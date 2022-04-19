import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import LoadingSpinner from "./components/Loading";

function App() {
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const catRes = await axios.get("https://aws.random.cat/meow");
      setCat(catRes.data.file);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="imageC">
          {loading && <LoadingSpinner /> }
          <img src={cat} alt="cat" onLoad={() => setLoading(false)} style={{ display: loading ? "none" : "block" }} />
        </div>
        <div className="buttonDiv">
          <button type="button" onClick={handleClick} disabled={loading} style={{ display: loading ? "none" : "block" }}>
            {cat ? "Next Cat" : "Get Cat"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
