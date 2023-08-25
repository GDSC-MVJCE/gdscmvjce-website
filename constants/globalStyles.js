import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        font-family: var(--font-manrope);
    }
    
    html {
        scroll-behavior: smooth;
        color-scheme: light dark;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        cursor: url("/cursors/cursor-svg.svg"), auto;
    }
    body {
        background-color: ${({ theme }) => theme.colors.bgPrimary};
        color: ${({ theme }) => theme.colors.contentPrimary};
    }
`;

export default GlobalStyles;
