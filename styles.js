import { createGlobalStyle } from "styled-components";
import { Figtree } from "@next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default createGlobalStyle`

:root{
    --background-color: #f2f2f2;
    --font-size: 18px;
    --text-color: #282828; 
    --background-color-yellow: #dbf22e;
    --background-color-blue: #2abfb0;
    --border: 1px solid #282828;

    --search-menu-background: #6c74d5;
    --search-menu-text: #282828;
    --burger-menu-background: #2AE6A2;
    --burger-menu-text: #282828;

    --modal-background: rgba(0, 0, 0, 0.5);
    --modal-menu-background: #f2f2f2;
    --modal-menu-color: #282828;

    --button-background: #6c74d5;
    --button-text: #f2f2f2;

    --tag-background: #2abfb0;
    --link-text: #282828; 

    --radio-button-background: #2abfb0;
    --radio-button-border: #939393;
    --checkbox-background: #2abfb0;
    --checkbox-border: #939393;



  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding-top: 125px;
    font-family: ${figtree.style.fontFamily};
    font-size: var(--font-size);
    background-color: var(--background-color);
  }

 a {
   text-decoration: none;
 }

 .Toastify__toast-body {
    font-family: ${figtree.style.fontFamily};
    font-size: var(--font-size);
    font-weight: 500;
    color: var(--text-color);
    text-align: center;
  }

`;
