import styled from "@emotion/styled/macro";


export const ContainerImpressora = styled.div`
    border: 1px solid black;
    padding: 1rem;
    max-width: 320px;
    color: ${ ({ online }) => online ? "green" : "red"}
`