import { useState } from "react";
import "./Formulario.css"

const Formulario = ({digimon}) => {
    const placeholderModificada = `Digite o nome de um digimon...`;    
    
    const[name,setName] = useState(digimon ? digimon.name: "");

    const handleName = (evento) => {
        setName(evento.target.value)
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        console.log(name)

        setName("");
    }
    

    return(
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
        </div>
    )
}

export default Formulario;