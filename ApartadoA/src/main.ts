import "./style.css";
import { content } from "./validarUI";

document.addEventListener("DOMContentLoaded", content);

/* IBAN DE PRUEBA

   "ES2114650100722030876293", - No válido
   "ES1234567890123456789012", - No válido
   "ES6621000418401234567891", - Válido
   "ES4400811718656672372259", - Válido
   "ES3904879685019987998231", - Válido
   "ES66-2100-0418-40-1234567891", - Válido
   "ES39 0487 9685 01 9987998231", - Válido
   "ES39 0487 9685 013 9987998231", - No está bien formado

*/
