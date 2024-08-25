import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Failed");

  useEffect(() => {
    fetch("http://54.211.9.166/demo/")
      .then((res) => res.json())
      .then((jsonRes) => setMessage(jsonRes))
      .catch(() => console.log("error in request"));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
