import { createGlobalStyle } from "styled-components";
import { Figtree } from "@next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default createGlobalStyle`


:root{
    --background-color: #F2F2F2; //F2F2F2 = Off-white color
    --font-size: 16px;
    --text-color: #282828; 
    //--background-color-accent: #FF5733;
    --background-color-yellow: #DBF22E;
    --background-color-blue: #2ABFB0;
    
    //--secondary-color: #2abfb0;
    --border: 1px solid black;
    --border-radius: 70px;
  }
  //F2F2F2 = Off-white color --Background
  //#282828 = Blackish color -- Text
  //#FF5733 = Orange color --Highlight
  //#dbf22e = Yellow color
  //#2abfb0 = türkis color

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${figtree.style.fontFamily};
    background-color: var(--background-color);
  }
h4{
  margin-block-end: 0;
  font-size: 16px;
  }
`;
