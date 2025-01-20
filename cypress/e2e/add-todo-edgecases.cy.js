/// <reference types="Cypress" />

describe('Add Todo - Edge Cases', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
    });
  
    it('should not add a todo with only whitespace', () => {
      cy.addTodo(' '); // Add a todo with whitespace
      cy.get('.todo-list li').should('have.length', 0); // No todos should be added
    });
  
    it('should add a long todo item', () => {
      const longTodo = 'This is a very long todo item that exceeds typical input lengths to test the application’s behavior.';
      cy.addTodo(longTodo); // Add a long todo item
      cy.get('.todo-list li').should('have.length', 1).and('contain', longTodo); // Verify the todo is added
    });
  
    it('should add duplicate todo items', () => {
      const duplicateTodo = 'Buy milk';
      cy.addTodo(duplicateTodo); // Add the first todo
      cy.addTodo(duplicateTodo); // Add the same todo again
      cy.get('.todo-list li')
        .should('have.length', 2) // Two todos should be added
        .each(($el) => {
          cy.wrap($el).should('contain', duplicateTodo); // Verify both items match the duplicate todo
        });
    });
  
    it('should add a todo with special characters', () => {
      const specialCharsTodo = '!@#MyTask1';
      //cy.addTodo(specialCharsTodo); // Add a todo with special characters
      cy.get('.new-todo').type(specialCharsTodo, { parseSpecialCharSequences: false }).type('{enter}');
      
      cy.get('.todo-list li').should('have.length', 1).and('contain', specialCharsTodo); // Verify the todo is added
    });



  });
  