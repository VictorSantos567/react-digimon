import "./App.css";

import Digimon from "./componentes/Digimon";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div className="App">
      <h1>Digidex</h1>
      <Digimon />
      <Formulario/>
    </div>
  );
}

export default App;
