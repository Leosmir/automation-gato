//import { beforeEach } from "mocha"

describe('GATO Header', ()=>{

  beforeEach('Visitar Gato', ()=>{
    cy.visit('https://www.gato.us/')
})
  it('TC#1 | Existe el logo', ()=>{
    cy.get('.r-88pszg',{timeout: 20000}).should('exist')
  })

  it('TC#2 | Existe el buscador', ()=>{
        cy.get('input[type="text"]',{timeout: 20000}).should('exist')
  })

  it('TC#3 | Existe botón Ingresar', ()=>{
    cy.get('div:contains("Ingresar")',{timeout: 20000}).should('exist')
  })

  it('TC#4 | Existe botón Sube tu juego', ()=>{
    cy.get('div:contains("Sube tu juego")',{timeout: 20000}).first().should('exist')
  })

  it('TC#5 | Existe botón Explorar juegos', ()=>{
    cy.get('div:contains("Explorar juegos")',{timeout: 20000}).first().should('exist')   
    cy.wait(30000)
  })
})
