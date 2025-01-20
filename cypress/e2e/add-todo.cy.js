/// <reference types="Cypress" />

describe('Add Todo', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
    });
  
    it('should add a single todo', () => {
      cy.addTodo('Buy groceries');
      cy.get('.todo-list li').should('have.length', 1).and('contain', 'Buy groceries');
    });
  
    it('should add multiple todos', () => {
      cy.addTodo('Task 1');
      cy.addTodo('Task 2');
      cy.get('.todo-list li').should('have.length', 2);
    });
  
    it('should not add an empty todo', () => {
      cy.get('.new-todo').type('{enter}');
      cy.get('.todo-list li').should('have.length', 0);
    });
  });
  