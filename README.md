# Cypress TodoMVC Test Suite

This project contains automated test cases written in [Cypress](https://www.cypress.io/) for the TodoMVC application. The test suite ensures the correctness of key functionalities in the TodoMVC React implementation.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Tools & Dependencies](#tools--dependencies)
- [Generate mochaReport](#generate-mochareport)
- [Screenshots](#screenshots)
---

## Project Overview

The TodoMVC application is a simple, widely-used example for demonstrating front-end frameworks. This project uses Cypress to test various functionalities such as:

- Adding todos
- Editing todos
- Marking todos as completed
- Filtering todos (Active, Completed)
- Deleting todos

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Clone the Repository
git clone https://github.com/niketsathe1997/cypress-UI_automation
cd todomvc-cypress-tests

### Tools & Dependencies

$npm install

$npm install cypress

$npm install mochawesome mochawesome-merge --save-dev

### Running Tests

- Running in Testrunner
 
$npx cypress open

- Running in headless mode

$npx cypress run

- Running in headed mode with browser
 
$npx cypress run --headed --browser firefox

### Generate mochaReport

$npx cypress run

Report will be generated in CypressAutomation\cypress\reports

### Screenshots
Screeshots are being captured dynamically in reports/screeshots directory

### Contact
For questions or suggestions, feel free to open an issue on GitHub or contact:

    Name: Niket Sathe
    Email: niketsathe777@gmail.com
    GitHub: niketsathe1997
