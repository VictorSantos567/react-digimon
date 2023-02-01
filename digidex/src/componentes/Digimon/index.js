import { useState, useEffect } from "react";

const url = "https://www.digi-api.com/api/v1/digimon"

const Digimon = (props) => {
  const [digimons, setDigimons] = useState([]);

  const urlName = url+"/"+props.teste

  useEffect(() => {
    async function fetchData() {

      const res = await fetch(urlName);

      const data = await res.text();

      const response = data;

      setDigimons(response);
    }
    fetchData();
  },);

  return (
    <div>
      <h1>{props.teste}</h1>
      <h2>{digimons}</h2>
    </div>
  );
};

export default Digimon;
