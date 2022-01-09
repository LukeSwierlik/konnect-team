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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const { mock } = require('../fixtures/mock')

Cypress.Commands.add('loadedServices', () => {
  cy.intercept({
    method: 'GET',
    url: '/api/service_packages'
  }, mock).as(
    'fetchServices'
  )

  cy.visit('/')
  cy.wait('@fetchServices')
})

Cypress.Commands.add('loadedServicesEmpty', () => {
  cy.intercept({
    method: 'GET',
    url: '/api/service_packages'
  }, []).as(
    'fetchServices'
  )

  cy.visit('/')
  cy.wait('@fetchServices')
})

Cypress.Commands.add('loadedServicesFailure', () => {
  cy.intercept({
    method: 'GET',
    url: '/api/service_packages'
  }, { statusCode: 500 }).as(
    'fetchServices'
  )

  cy.visit('/')
  cy.wait('@fetchServices')
})
