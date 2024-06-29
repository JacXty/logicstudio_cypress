# Proyecto de  Automatizacion

## Estructura

```bash
├─cypress/
├── e2e/
│   └── tests/
│       └── test1.cy.js -> Test de Pruebas
├── fixtures/
│   └── mario.jpg -> Imagen de prueba para enviar en el formulario
├── support/
│   └── e2e.js -> Importar las funciones definidas
│   └── functions.js -> funciones reutilizables 
└── cypress.config.js -> Configuracion cypress
```

## Requerimientos

Version de Node

```bash
    ├── Node/
    │   v20.11.0
    └── ...
```

Verdion Cypress

```bash
    ├── Cypress/
    │   v13.7.2
    └── ...
```

## Datos Importantes

Para poder ejecutar el sistema en sus equipos tener instalado NodeJS en la seccion de requerimientos se encuentra la version.

### Instalacion de paquetes

Utilizar el comando adjunto para instalar  [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) y sus librerias utilizadas dentro del proyecto ya que si no se ejecuta no podra levantar el sistema.

```bash
npm install 
```

### Comando para ejecutar el proyecto

```bash
npm run cy:open
```

## Version del Proyecto

 V1.0.0
