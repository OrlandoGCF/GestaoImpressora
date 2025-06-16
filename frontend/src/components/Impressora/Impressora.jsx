import React from "react";
import { ContainerImpressora } from "./styles";
//import { ContainerBotao } from "../Botao/styles";
import { Botao } from "../Botao";

const Impressora = ({id, nome, toner, online, ip}) => {
    const funcaoBotao = (idBotao) =>{
        window.alert(`sou o botao ${idBotao}` );
    }

    return (
        <ContainerImpressora online={online}>{id} - {nome} - {toner} - {online?"Online" : "Offline"} - {ip} - 
            <Botao key={id} id={id} children="children" onClick={() => funcaoBotao(id)}/>
        </ContainerImpressora>
       // <ContainerBotao>
       //     <Botao key={id} id={id} children="children" onClick={() => funcaoBotao(id)}/>
      //  </ContainerBotao>
    )
}

export default Impressora