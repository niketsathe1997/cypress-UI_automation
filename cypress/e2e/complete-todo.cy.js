/// <reference types="Cypress" />

describe('Complete Todo', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
      cy.addTodo('Task 1');
      cy.addTodo('Task 2');
    });
  
    it('should mark a todo as completed', () => {
      cy.completeTodo(0);
      cy.get('.todo-list li').eq(0).should('have.class', 'completed');
    });
  
    it('should unmark a completed todo', () => {
      cy.completeTodo(0);
      cy.completeTodo(0);
      cy.get('.todo-list li').eq(0).should('not.have.class', 'completed');
    });
  });
  