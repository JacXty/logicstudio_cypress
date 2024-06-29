describe('Test de reserva de viaje espacial', () => {
  beforeEach(() => {
    cy.visit('https://demo.testim.io');
  });

  it('Valida el título de la página', () => {
    cy.title().should('eq', 'Space & Beyond | Testim.io demo');
  });

  it('Busca la existencia de un destino llamado Madan', () => {
    cy.contains('Madan').should('exist');
  });

  it('Selecciona una fecha de salida', () => {
    cy.get('[data-react-toolbox="date-picker"] input').first().click();
    cy.get('.theme__active___2k63V > span').click();
    cy.get(':nth-child(29) > span').click();
    cy.get('button').last().click();
  });

  it('Elige boleto para 2 adultos y 1 niño', () => {
    cy.seleccionarPasajeros();
  });

  it('Filtra destinos por planetas de color azul', () => {
    cy.abrirFiltroColor();
    cy.seleccionarColor();
  });

  it('Reserva el planeta Tayabamba', () => {
    cy.abrirFiltroColor();
    cy.seleccionarColor();
    cy.reservarPlaneta('Tayabamba');
  });

  it('Llena todos los datos del formulario', () => {
    cy.abrirFiltroColor();
    cy.seleccionarColor();
    cy.reservarPlaneta('Tayabamba');
    cy.llenarFormulario('Social Security','socialsec@gmail.com','111-11-1111','(codigopais)2124567890');
  });

  it('Carga una fotografía del carnet de vacunación', () => {
    cy.abrirFiltroColor();
    cy.seleccionarColor();
    cy.reservarPlaneta('Tayabamba');
    cy.cargarFotografia();
  });

  it('Ingresa el código promocional 30076', () => {
    cy.abrirFiltroColor();
    cy.seleccionarColor();
    cy.reservarPlaneta('Tayabamba');
    cy.cargarFotografia();
    cy.ingresarCodigoPromocional('30076');
  });

  it('Realiza el pago', () => {
    cy.abrirFiltroColor();
    cy.seleccionarColor();
    cy.reservarPlaneta('Tayabamba');
    cy.llenarFormulario('Social Security','socialsec@gmail.com','111-11-1111','(codigopais)2124567890');
    cy.cargarFotografia();
    cy.realizarPago();
  });
});
