import './App.css';

import { useState, useEffect } from "react";

const url = "https://www.digi-api.com/api/v1/digimon";

function App() {

  const [digimons,setDigimons] = useState([]);

  useEffect(() => {
    async function fetchData(){
      
      const res = await fetch(url);
      
      const data = await res.json();

      setDigimons(data);
    }
    fetchData();
  },[]);

  

  return (
    <div className="App">
      <h1>Oi</h1>
      {digimons}
    </div>
  );
}

export default App;
