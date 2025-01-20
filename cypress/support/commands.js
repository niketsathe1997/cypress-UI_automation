// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addTodo', (todoText) => {
    cy.get('.new-todo').type(`${todoText}{enter}`);
  });

Cypress.Commands.add('completeTodo', (index) => {
    cy.get('.todo-list li').eq(index).find('.toggle').click();
  });

Cypress.Commands.add('deleteTodo', (index) => {
    cy.get('.todo-list li').eq(index).find('.destroy').invoke('show').click();
  });