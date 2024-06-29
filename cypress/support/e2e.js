
import * as functions from './functions';

Cypress.Commands.add('seleccionarPasajeros', functions.seleccionarPasajeros);
Cypress.Commands.add('abrirFiltroColor', functions.abrirFiltroColor);
Cypress.Commands.add('seleccionarColor', functions.seleccionarColor);
Cypress.Commands.add('reservarPlaneta', functions.reservarPlaneta);
Cypress.Commands.add('llenarFormulario', functions.llenarFormulario);
Cypress.Commands.add('cargarFotografia', functions.cargarFotografia);
Cypress.Commands.add('ingresarCodigoPromocional', functions.ingresarCodigoPromocional);
Cypress.Commands.add('realizarPago', functions.realizarPago);