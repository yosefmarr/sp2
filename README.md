# SP2 - Next.js

Este es un proyecto creado con [Next.js](https://nextjs.org), inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Comenzando

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

## Scripts Disponibles

A continuación, se detallan algunos comandos útiles para trabajar con este proyecto:

### Correr el servidor de desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo y recarga automáticamente los cambios que realices en los archivos.

### Ejecutar pruebas

```bash
npm run test
```

Ejecuta las pruebas unitarias e integración utilizando `jest`. Asegúrate de tener tus pruebas configuradas correctamente en la carpeta `__tests__`.

### Ejecutar el análisis de ESLint

```bash
npm run lint
```

Ejecuta el análisis de ESLint para verificar que el código sigue las normas de estilo definidas. También puedes corregir problemas automáticamente usando:

```bash
npm run lint -- --fix
```

## Estructura del Proyecto

- `app/` - Contiene las páginas y componentes principales de la aplicación.
- `components/` - Componentes reutilizables de la aplicación.
- `utils/` - Funciones de utilidades que se pueden compartir entre diferentes partes del proyecto.
- `__tests__/` - Carpeta que contiene las pruebas para los componentes y funciones.

## Información Adicional

- Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar fuentes.
- La configuración de ESLint sigue las recomendaciones de Next.js y de `eslint:recommended`, con algunas reglas adicionales definidas en el archivo `.eslintrc.json`.
