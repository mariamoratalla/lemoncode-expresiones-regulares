# LABORATORIO EXPRESIONES REGULARES

En este laboratorio se plantean dos ejercicios que utilizan expresiones regulares.

## ¿Cómo abrir los proyectos?

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta cada sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## APARTADO A - EXTRAER INFORMACIÓN DE UN IBAN

En este ejercicio validamos el IBAN de las cuentas bancarias españolas. Utilizamos una expresión regular para verificar que el formato del IBAN sea correcto, validamos su autenticidad utilizando la librería ibantools y extraemos información relevante como el código de sucursal y el banco al que pertenece.

## APARTADO B- EXTRAER IMÁGENES DE UN HTML

En este ejercicio tenemos un textarea donde se introduce un HTML. Con una expresión regular comprobamos si tiene alguna imagen con su etiqueta `<img> `, extraemos el src y representamos las imágenes con un grid.
