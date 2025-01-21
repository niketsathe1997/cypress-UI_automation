describe('Add 1000 Todos', () => {
    before(() => {
      // Visit the to-do app page
      cy.visit('https://todomvc.com/examples/react/dist/#/') 
    })
  
    it('should add 1000 todos', () => {
      const todoText = 'New Todo'
  
      // Loop to add 1000 todos
      for (let i = 1; i <= 1000; i++) {
        // Type the todo text into the input field
        //cy.get('input[placeholder="Add a new task"]') // Modify this selector based on your input field
        //  .type(`${todoText} ${i}`)
  
        // Click the 'Add' button (replace the selector as per your app)
        //cy.get('button[type="submit"]') // Modify this if the button has a different selector
        //  .click()

          cy.addTodo(`${todoText} ${i}`);
  
        // Optionally, you can add a short delay to simulate real user interactions
        // cy.wait(100) // This can be removed if you want to add todos without delay
      }
  
      // Verify if 1000 todos are visible (or however you want to check)
      cy.get('.todo-item').should('have.length', 1000) // Adjust the selector to your app's structure
    })
  })
  