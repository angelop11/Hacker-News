import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


//RESET CSS START
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, button, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
	background: transparent;
	font-family: "Roboto", sans-serif;
}

*, *:before, *:after{
    -ms-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
}

b {
	font-weight: 500;
}

body, html{
    min-height: 100vh;
    width: 100%;
    height: auto;
}

body{
  overflow-x: hidden;
	font-family: "Roboto", sans-serif;
	color: #4a4a4a;
  font-weight:normal;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
  text-decoration: none;
}

figure{
  margin:0px;
}

//RESET CSS END

`;
