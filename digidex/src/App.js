import "./App.css";

import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div className="App">
      <h1>Digidex</h1>
      <Formulario digimon={{ name: "" }} />
    </div>
  );
}

export default App;
