import { extraerImagenes } from "./mostrarImagenes";

describe("extraerImagenes", () => {
  it("debería devolver un array con el enlace de las imágenes", () => {
    // Arrange
    const html =
      '<img src="https://example.com/image1.jpg">' +
      '<img src="https://example.com/image2.jpg">';
    // Act
    const resultado = extraerImagenes(html);
    // Assert
    expect(resultado).toEqual([
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ]);
  });
});
