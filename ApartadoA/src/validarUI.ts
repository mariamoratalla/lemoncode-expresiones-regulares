import { estaBienFormadoElIban, validarInfoIban } from "./validar";
import { IbanInfo } from "./validar.model";
import { bancos } from "./validar.model";

const iban = document.getElementById("iban") as HTMLInputElement;
const bienFormado = document.getElementById(
  "bien-formado"
) as HTMLParagraphElement;
const validez = document.getElementById("validez") as HTMLParagraphElement;
const banco = document.getElementById("banco") as HTMLParagraphElement;
const sucursal = document.getElementById("sucursal") as HTMLParagraphElement;
const digitoControl = document.getElementById(
  "digito-control"
) as HTMLParagraphElement;
const numeroCuenta = document.getElementById(
  "numero-cuenta"
) as HTMLParagraphElement;
const boton = document.getElementById("comprobar-button") as HTMLButtonElement;

const mostrarMensaje = (parrafo: HTMLElement, mensaje: string) => {
  parrafo.innerHTML = mensaje;
};

const mensajes = (infoIban: IbanInfo | void) => {
  if (infoIban) {
    mostrarMensaje(bienFormado, "El IBAN está bien formado");
    mostrarMensaje(validez, "El IBAN es válido");
    mostrarMensaje(banco, `Banco: ${infoIban.nombreBanco}`);
    mostrarMensaje(sucursal, `Código sucursal: ${infoIban.sucursal}`);
    mostrarMensaje(
      digitoControl,
      `Dígito de control: ${infoIban.digitoControl}`
    );
    mostrarMensaje(numeroCuenta, `Número de cuenta: ${infoIban.numeroCuenta}`);
  } else {
    mostrarMensaje(validez, "El IBAN no es válido");
    mostrarMensaje(banco, "");
    mostrarMensaje(sucursal, "");
    mostrarMensaje(digitoControl, "");
    mostrarMensaje(numeroCuenta, "");

    if (!estaBienFormadoElIban(iban.value)) {
      mostrarMensaje(bienFormado, "El IBAN no está bien formado");
      mostrarMensaje(validez, "");
    }
  }
};

const handleClick = () => {
  const numeroIban = iban.value;
  const infoIban = validarInfoIban(numeroIban, bancos);
  mensajes(infoIban);
};

export const content = () => {
  if (boton && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", handleClick);
  }
};
