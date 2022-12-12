import "./App.css";
import Country from "./components/Country";
import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    }

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h2>Countries</h2>
      <div className="container">
        {data.slice(0, 6).map((item, id) => {
          return <Country key={id} country={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
