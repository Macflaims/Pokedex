const URL= "http://127.0.0.1:5500/index.html"
const POKEMONES_POR_PAG = 10;
const CANTIDAD_DE_ITEMS_PAGINADOR = 7;



describe("Pokedex con Pokeapi", () => {
  before(() => {
    cy.visit(URL);
  })
    describe('Comprueba que los componentes se muestren correctamente', () => {
    
      it("Se asegura de que el título sea visible", () => {
        cy.get("#nav-titulo").should("be.visible");
      })

      it("Se asegura de que se muestren correctamente los pokemon", () => {
        cy.visit(URL);
        cy.get("#tabla").find(".tabla-pokemon").should("have.length", POKEMONES_POR_PAG);
      })
      
      it("Se asegura de que se muestre correctamente el paginador", () => {
        cy.visit(URL);
        cy.get("#nav").find("#paginador").find(".page-item").should("have.length", CANTIDAD_DE_ITEMS_PAGINADOR);
      }) 
  })
});

describe('Comprueba interacción con el contenido', () => {
  it('Se asegura de que el popup se abra al hacer click sobre cada tabla', () => {
    cy.visit(URL);
    for(let i=1; i<POKEMONES_POR_PAG;i++){
      cy.get('#tabla').find('.tabla-pokemon').eq(i).click();
      cy.wait(500);
      cy.get('.modal-header').find('.btn-close').should('be.visible').click();
      cy.get('body').find(".popup").should("not.be.visible");
    }    
  });
})

describe('Comprueba el correcto funcionamiento del cambio de página', () => {

  it('visualización del paginador', () => {
    cy.visit(URL);
    cy.get('#paginador').find('.page-item').should("have.length", CANTIDAD_DE_ITEMS_PAGINADOR);
  });

  it('Cambia de pagina', () => {
    cy.visit(URL);
    cy.wait(500);
    cy.get('#paginador').find('.page-item').eq(1).click();
    cy.get('#tabla').find('.tabla-pokemon').should('have.length', POKEMONES_POR_PAG);
    for(let i=1; i<POKEMONES_POR_PAG;i++){
      cy.get('#tabla').find('.tabla-pokemon').eq(i).click();
      cy.wait(500);
      cy.get('.modal-header').find('.btn-close').should('be.visible').click();
      cy.get('body').find(".popup").should("not.be.visible");
    }    
  });

  it('Se asegura que al hacer click sobre el título vuelva a la primer página', () => {
    cy.visit(URL);
    cy.get('#paginador').find('.page-item').eq(3).click();
    cy.wait(500);
    cy.get("#nav-titulo").click();
    cy.get('#tabla').find('.tabla-pokemon').should('have.length', POKEMONES_POR_PAG);
  })
})
