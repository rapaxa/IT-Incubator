import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ul li{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;
        max-width: 1240px;
        margin: 0 auto;
        width: 100%;
        padding-top: 80px;
    }
`;
