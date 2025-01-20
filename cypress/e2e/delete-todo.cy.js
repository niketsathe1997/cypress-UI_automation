/// <reference types="Cypress" />

describe('Delete Todo', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
      cy.addTodo('Task to delete');
    });
  
    it('should delete a todo', () => {
      cy.deleteTodo(0);
      cy.get('.todo-list li').should('have.length', 0);
    });
  });
  