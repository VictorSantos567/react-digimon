import "./App.css";

import Digimon from "./componentes/Digimon";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div className="App">
      <h1>Digidex</h1>
      <Formulario digimon={{name:""}}/>
      <Digimon />
    </div>
  );
}

export default App;
