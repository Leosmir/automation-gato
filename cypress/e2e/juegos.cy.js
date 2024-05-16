describe('Test juegos', ()=>{
    it('TC#1 | URL juego', ()=>{
        cy.visit('https://gato-files-test.s3.amazonaws.com/assets/games/Semaforo%20Climber/index.html'), 
        cy.wait(30000)
    })
})
    