import React from "react"
import { Impressora } from "../components"
import { listaImpressoras } from "../data"
const IndexPage = () => {
  return (
    <main>
      {
        listaImpressoras.map((impressora)=>(
          <Impressora key={impressora.id} {...impressora} toner={impressora.tonner}/>
        ))
      }
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
