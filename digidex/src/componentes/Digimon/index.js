import { useState, useEffect } from "react";

const url = "https://www.digi-api.com/api/v1/digimon";

const Digimon = () => {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.text();

      setDigimons(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Olá</h1>
      <h2>{digimons}</h2>
    </div>
  );
};

export default Digimon;
