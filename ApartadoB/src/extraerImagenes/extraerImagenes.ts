export const extraerImagenes = (html: string): string[] => {
  const patron = /<img[^>]*src="([^"]*)"/gm;
  let coincidencia = patron.exec(html);
  const imagenes = [];

  while (coincidencia !== null) {
    imagenes.push(coincidencia[1]);
    coincidencia = patron.exec(html);
  }
  return imagenes;
};
