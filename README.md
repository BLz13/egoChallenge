Pasos para visualizar el challenge:

1ero: Ir al boton que dice "Code" o "Codigo" y clonar el repositorio desde la terminal de la computadora usando o descargar como archivo zip y descomprimir.

2do: Dentro de la carpeta del proyecto se debe crear una carpeta para acceder a la API que por motivos de seguridad no se subio a GitHub. Dentro de la carpeta "src" crear una carpeta "config" y dentro se debe crear un archivo js llamado "api.js" y dentro debe tener el siguiente texto "export const API_BASE_URL = 'https://link.com/api';"

3ero: Abrir la terminal en la carpeta donde se descomprimio o se clono el proyecto y escribir "npm install" y dar enter.

4to: Instalacion de independencias, en la terminal abierta escribir: "npm install vite-plugin-svgr" dar enter y una vez terminado escribir "npm install swiper".

5to: Una vez finalizado esto, solo resta escribir "npm run dev" dar enter y saldra un link, hacer click presionando control o copiar la direccion y pegar en el navegador para ver el proyecto.

Opcional: pPara acceder a la vista móvil en navegadores de escritorio,usa las Herramientas para Desarrolladores (F12 o clic derecho > Inspeccionar), activa la Barra de Herramientas de Dispositivo (icono de móvil y tablet), y selecciona el dispositivo o ajusta el tamaño para simular un celular, siendo el método más común para probar el diseño responsivo de sitios web.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
