describe('Add 1000 Todos', () => {
    before(() => {
      // Visit the to-do app page
      cy.visit('https://todomvc.com/examples/react/dist/#/') 
    })
  
    it('should add 1000 todos', () => {
      const todoText = 'New Todo'
  
      // Loop to add 1000 todos
      for (let i = 1; i <= 1000; i++) {
        

          cy.addTodo(`${todoText} ${i}`);

      }
  
      // Verify if 1000 todos are visible (or however you want to check)
      cy.get('.todo-item').should('have.length', 1000) // Adjust the selector to your app's structure
    })
  })
  