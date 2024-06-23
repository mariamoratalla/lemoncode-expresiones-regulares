import { extraerImagenes } from "./extraerImagenes";

describe("extraerImagenes", () => {
  it("debería devolver un array con el enlace de las imágenes", () => {
    // Arrange
    const html =
      'mdfgf <img src="https://example.com/image1.jpg"> asfsdfds' +
      ' sfsd <img src="https://example.com/image2.jpg">';
    // Act
    const resultado = extraerImagenes(html);
    // Assert
    expect(resultado).toEqual([
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ]);
  });
});
