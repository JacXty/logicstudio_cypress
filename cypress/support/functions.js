import 'cypress-file-upload';

export function seleccionarPasajeros() {
  cy.get('.Hero__form-box___126DY > :nth-child(3) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click();
  cy.get(':nth-child(4) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click();
}

export function abrirFiltroColor() {
  cy.get('.Hero__hero___1FDXn > :nth-child(4) .theme__button___1iKuo').click();
}

export function seleccionarColor() {
  cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click();
  cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').click()
}

export function reservarPlaneta(planeta) {
  cy.contains('.theme__cardTitle___3Tyrr', planeta).parent().within(() => {
    cy.contains('Book').click();
      cy.contains(planeta).should('exist');
    })
  };

export function llenarFormulario(name, email,identidad,telefono) {
  cy.get('form > :nth-child(1) > .theme__inputElement___27dyY').type(name);
  cy.get('form > :nth-child(2) > .theme__inputElement___27dyY').type(email);
  cy.get(':nth-child(3) > .theme__inputElement___27dyY').type(identidad);
  cy.get(':nth-child(4) > .theme__inputElement___27dyY').type(telefono);
};


export function cargarFotografia() {
  cy.fixture('imagen.jpg').then(fileContent => {
    cy.get('input[type="file"]').attachFile({
      fileContent: fileContent.toString(),
      fileName: 'imagen',
      mimeType: 'image/jpg'
    });
  });
}

export function ingresarCodigoPromocional(codigo) {
  cy.get('.flexboxgrid__col-xs-7___3o2m- input').type(codigo);
  cy.get('.flexboxgrid__col-xs-5___1HkK5 .theme__button___1iKuo').click();
  cy.get('.OrderSummary__row-4___2JawU > .flexboxgrid__col-xs-5___1HkK5')
}

export function realizarPago() {
  cy.get('.theme__check___2B20W').click();
  cy.get(':nth-child(8) > .flexboxgrid__col-xs___1ROHR').click();
}
