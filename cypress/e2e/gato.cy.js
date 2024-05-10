describe('GATO Home', ()=>{
  it('Barra de Navegacion', ()=>{
      cy.log('Visitar Gato')
      cy.visit('https://www.gato.us/')

      cy.log('Existe el logo')
      cy.get('.r-88pszg',{timeout: 15000}).should('exist')

      cy.log('Existe el buscador')
      cy.get('input[type="text"]',{timeout: 15000}).should('exist')

      //falta localizar botón de Explora y Login

      cy.wait(5000)
  })
})
