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

    *::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
      width: 0px;
    }

    *::-webkit-scrollbar-track:hover {
      background: #cfcdcd;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #4f4f4f;
      border-radius: 14px;
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
        scrollbar-gutter: stable;
    }

    a, button{
      cursor: url("/cursors/cursor-pointer.svg"), auto;
    }
`;

export default GlobalStyles;
