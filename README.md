# Personal Portfolio (Next.js + Tailwind CSS)

Portfolio personal con soporte para:
- **Modo Black (Oscuro) / Light (Claro)** mediante el ícono de contraste en la barra superior.
- **Inglés (`EN`) y Español (`ES`)** en tiempo real desde el selector de la barra superior.
- Diseño basado en las vistas de **Resume / CV**, **Uses** y **Contact**.

## Cómo ejecutar el proyecto

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (v18.18+ o v20+ LTS) y ejecuta:

```bash
npm install
npm run dev
```

Luego abre `http://localhost:3000` en tu navegador.

## Cómo personalizar tus datos

Toda la información personal (iniciales del logo `//`, nombre, redes sociales, lista de habilidades, experiencia laboral y equipamiento en *Uses*) tanto en inglés como en español se encuentra centralizada en:

- `src/data/portfolio.ts`
