import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [cat, setCat] = useState<string>("");

  const handleClick = async () => {
    try {
      const catRes = await axios.get("https://aws.random.cat/meow");
      setCat(catRes.data.file);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="imageC">
          <img src={cat} alt="cat"></img>
        </div>
        <div className="buttonDiv">
          <button onClick={handleClick}>{cat ? "New Cat" : "Get Cat"}</button>
        </div>
      </div>
    </div>
  );
};

export default App;
