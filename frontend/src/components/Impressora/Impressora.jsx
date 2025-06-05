import React from "react";
import { ContainerImpressora } from "./styles";

const Impressora = ({id, nome, toner, online, ip}) => {
    return (
        <ContainerImpressora online={online}>{id} - {nome} - {toner} - {online?"Online" : "Offline"} - {ip}</ContainerImpressora>
    )
}

export default Impressora