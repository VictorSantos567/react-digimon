import { useState, useEffect } from "react";
import Formulario from "../Formulario";


const url = "https://www.digi-api.com/api/v1/digimon";

const Digimon = (props) => {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    async function fetchData() {
    
      const res = await fetch(url);
      
      const data = await res.json();

      const response = data.content;

      setDigimons(response);
    }
    fetchData();
  }, []);


  
  return (
    <div>
      <ul>
        {digimons.map((digimon) => (
          <li key={digimon.id}>{digimon.name}</li>
        ))}
      </ul>
      <Formulario />
    </div>
  );
};

export default Digimon;
