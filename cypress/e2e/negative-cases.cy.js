/// <reference types="Cypress" />

describe('Add Todo - single char, int or special char', () => {
    beforeEach(() => {
      // Visit the TodoMVC application before each test
      cy.visit('https://todomvc.com/examples/react/dist/#/');
    });
  
    it('should add a to-do with a single character', () => {
      const singleChar = 'A';
      cy.get('.new-todo').type(`${singleChar}{enter}`); // Add single character todo
      cy.get('.todo-list li').should('have.length', 1).and('contain', singleChar);
    });
  
    it('should add a to-do with an integer', () => {
      const numberTodo = '7';
      cy.get('.new-todo').type(`${numberTodo}{enter}`); // Add integer todo
      cy.get('.todo-list li').should('have.length', 1).and('contain', numberTodo);
    });
  
    it('should add a to-do with a special character', () => {
      const specialChar = '@';
      cy.get('.new-todo').type(`${specialChar}{enter}`); // Add special character todo
      cy.get('.todo-list li').should('have.length', 1).and('contain', specialChar);
    });
  
    afterEach(() => {
      // Clear all todos after each test
      cy.get('.todo-list li .destroy').invoke('show').click({ multiple: true });
      cy.get('.todo-list li').should('have.length', 0);
    });
  });
  