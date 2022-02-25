import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
:root {
--primary-bg: linear-gradient(245deg, rgba(255,255,255,1) 0%, rgba(238,238,238,1) 100%); //light gradient
--secondary-bg: #FFfdfd; //light
--tertiary-bg: #d5e6f5; //blue-gray
--headings-color: #052624; //grey
--primary-color: #f61961; //lobster pink
--icon-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.3rem);
--basic-font-size: clamp(0.7rem, 0.4137rem + 1.2214vw, 1rem);
}
body {
  font-size: var(--basic-font-size);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p {
  margin: 0;
}
h1 {
  color: var(--headings-color);
  font-size: clamp(1.5rem,-0.875rem + 8.333vw,3rem);
  font-weight: 900;
  margin:0;
  text-transform: uppercase;
}
h2 {
    margin:0;
  font-size: clamp(1.3rem, -0.875rem + 8.333vw, 2rem);
}
h3 {
    margin:0;
  font-size: clamp(1.1rem, -0.875rem + 8.333vw, 1.5rem);
}
`;

export { GlobalStyle };
