import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    aside, nav, footer, header, section, main {
        display: block;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: white;
        width: 100%;
    }

    a svg {
        display: block;
    }

`;
