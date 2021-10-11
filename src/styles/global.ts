import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  
#root {
  width: 100vw;
  height: 100vh;

  font-size: 62.5%;
}

* {
  margin: 0;
  box-sizing: border-box;
  outline: 0;
}

:root {
  --violet: hsl(257, 40%, 49%);
  --magenta: hsl(300, 69%, 71%);
}

@media (max-width: 1024px) {
  html {
    font-size: 80%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 60%;
    grid-template-areas: 
    "Logo"
    "Mockups"
    "H1"
    "Span"
    "Button"
    "Footer";
  }

  

}

`;

