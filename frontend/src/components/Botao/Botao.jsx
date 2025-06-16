import React from "react";


const Botao = ({children , onClick, id}) =>
{
 
    return (
        <button onClick={onClick}> {id} - {children} -  </button>
    )



}

export default Botao