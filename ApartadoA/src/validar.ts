export const estaBienFormadoElIBAN = (iban: string): boolean => {
  const patron =
    /^[A-Z]{2}\d{2}(\s|-)?\d{4}(\s|-)?\d{4}(\s|-)?\d{2}(\s|-)?\d{10}$/;

  return patron.test(iban);
};

