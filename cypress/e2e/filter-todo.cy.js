/// <reference types="Cypress" />

describe('Filter Todos', () => {
    beforeEach(() => {
      cy.visit('https://todomvc.com/examples/react/dist/#/');
      //cy.addTodo('Active Task');
      //cy.addTodo('Completed Task');
      //cy.completeTodo(1); // Mark the second todo as completed
    });
  
    it('should filter todos correctly', () => {
        cy.addTodo('Task 1');
        cy.addTodo('Task 2');

        cy.get('.todo-list li .toggle').first().click(); // Mark the first todo as completed
    
        cy.get('.filters li').contains('All').click();

        cy.get('.todo-list li').should('have.length', 2);

        cy.contains('Active').click();
        cy.get('.todo-list li').should('have.length', 1).and('not.have.class', 'completed');
    
        cy.contains('Completed').click();
        cy.get('.todo-list li').should('have.length', 1).and('have.class', 'completed');


      });


  
  });
  