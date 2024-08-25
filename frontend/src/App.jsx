import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Failed");

  useEffect(() => {
    fetch("/demo")
      .then((res) => res.json())
      .then((jsonRes) => setMessage(jsonRes))
      .catch(() => console.log("error in request"));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
