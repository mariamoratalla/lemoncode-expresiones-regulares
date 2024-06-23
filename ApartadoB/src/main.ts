import { handleClick } from "./extraerImagenes/extraerImagenesUI";

const boton = document.getElementById("boton-extraer");

if (boton && boton instanceof HTMLButtonElement) {
  boton.addEventListener("click", handleClick);
}
