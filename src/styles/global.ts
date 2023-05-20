import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;   
        -webkit-font-smoothing: antialiased;
    }

    html {
        background-color: ${(props) => props.theme['backgroundDefault']};
    }    
`;