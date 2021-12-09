import "./style.css";
import { add } from "./add";

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite 然叔 ${add(3, 5)}</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
