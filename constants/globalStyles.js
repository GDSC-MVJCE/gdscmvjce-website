import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }
    
    html {
        scroll-behavior: smooth;
        
    }
    body {
        background-color: ${({ theme }) => theme.colors.bgPrimary};
    }
`;

export default GlobalStyles;
