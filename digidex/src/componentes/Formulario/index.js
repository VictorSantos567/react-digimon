import { useState } from "react";

const Formulario = (props) => {
    const placeholderModificada = `Digite o nome de um digimon...`;    
    //const [nome,setNome] = useState("");
    
    const aoSalvar = (evento) =>{
        evento.preventDefault();
        
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <input placeholder={placeholderModificada} />
            </form>
            <button className="botao">Enviar</button>
        </section>
    )
}

export default Formulario;