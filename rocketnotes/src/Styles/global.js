import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }

    body, input, button, textarea { 
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;
    }
`;