import { useState } from "react";
import Digimon from "../Digimon";
import "./Formulario.css";

const Formulario = ({ digimon }) => {
  const placeholderModificada = `Digite o nome de um digimon...`;

  const [name, setName] = useState(digimon ? digimon.name : "");
  const [nome, setNome] = useState();

  const handleName = (evento) => {
    setName(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setNome(name);

    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={placeholderModificada}
          onChange={handleName}
          value={name}
        />
        <input type="submit" value="enviar" />
      </form>
      <Digimon teste={nome} />
    </div>
  );
};

export default Formulario;
