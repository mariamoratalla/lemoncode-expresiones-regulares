import { estaBienFormadoElIban, infoIbanConNombreBanco } from "./validar";
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

const mostrarUnMensaje = (parrafo: HTMLElement, mensaje: string) => {
  parrafo.innerHTML = mensaje;
};

const mostrarTodosMensajes = (infoIban: IbanInfo | void) => {
  if (infoIban) {
    mostrarUnMensaje(bienFormado, "El IBAN está bien formado");
    mostrarUnMensaje(validez, "El IBAN es válido");
    mostrarUnMensaje(banco, `Banco: ${infoIban.nombreBanco}`);
    mostrarUnMensaje(sucursal, `Código sucursal: ${infoIban.sucursal}`);
    mostrarUnMensaje(
      digitoControl,
      `Dígito de control: ${infoIban.digitoControl}`
    );
    mostrarUnMensaje(
      numeroCuenta,
      `Número de cuenta: ${infoIban.numeroCuenta}`
    );
  } else {
    mostrarUnMensaje(bienFormado, "");
    mostrarUnMensaje(validez, "El IBAN no es válido");
    mostrarUnMensaje(banco, "");
    mostrarUnMensaje(sucursal, "");
    mostrarUnMensaje(digitoControl, "");
    mostrarUnMensaje(numeroCuenta, "");

    if (!estaBienFormadoElIban(iban.value)) {
      mostrarUnMensaje(bienFormado, "El IBAN no está bien formado");
      mostrarUnMensaje(validez, "");
    }
  }
};

const handleClick = () => {
  const numeroIban = iban.value;
  const infoIban = infoIbanConNombreBanco(numeroIban, bancos);
  mostrarTodosMensajes(infoIban);
};

export const content = () => {
  if (boton && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", handleClick);
  }
};
