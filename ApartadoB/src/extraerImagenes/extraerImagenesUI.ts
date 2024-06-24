import { extraerImagenes } from "./extraerImagenes";

const crearImagen = (src: string): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.className = "imagen";
  imagen.src = src;
  imagen.alt = "Imagen";

  return imagen;
};

const crearMensaje = (contenedor: HTMLDivElement, texto: string) => {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = texto;
  contenedor.appendChild(parrafo);
};

export const handleClick = () => {
  //Obtener el valor del textarea
  const html = document.getElementById("texto");

  if (html && html instanceof HTMLTextAreaElement) {
    const htmlValue = html.value;

    //Extraer los enlaces de las imágenes
    const imagenes = extraerImagenes(htmlValue);

    //Pintar imágenes
    const imagenesContenedor = document.querySelector(".imagenes-contenedor");

    if (imagenesContenedor && imagenesContenedor instanceof HTMLDivElement) {
      imagenesContenedor.innerHTML = "";

      if (extraerImagenes(htmlValue).length <= 0) {
        crearMensaje(imagenesContenedor, "No se han encontrado imágenes");
      } else {
        imagenes.forEach((src) => {
          const imgElement = crearImagen(src);
          imagenesContenedor.appendChild(imgElement);
        });
      }
    }
  }
};
