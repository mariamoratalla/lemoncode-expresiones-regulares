import * as ibantools from "ibantools";

export const estaBienFormadoElIban = (iban: string): boolean => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;

  return patron.test(iban);
};

export const esElIbanValido = (iban: string): boolean => {
  const numeroLimpio = iban.replace(/[\s-]/g, "");
  return ibantools.isValidIBAN(numeroLimpio);
};

export const extraerInfoIban = (iban: string) => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?(?<nombreBanco>\d{4})(\s|-)?(?<oficina>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/;

  const coincidencia = patron.exec(iban);

  if (coincidencia) {
    const { nombreBanco, oficina, digitoControl, numeroCuenta } =
      coincidencia.groups as any;

    return console.log({
      nombre: nombreBanco,
      oficina,
      digitoControl,
      numeroCuenta,
    });
  } else {
    return console.error("El IBAN no es válido");
  }
};

extraerInfoIban("ES21 0081 1098 08 1234567890");
