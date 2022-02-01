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

// cy.clearCookie()
// cy.clearLocalStorage

// import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
//
// Cypress.Commands.add('login', (email, password) => {
//
// Given ("I am on the login page", () => {
//     cy.visit("/login")
//     // cy.clearCookie()
//     // cy.clearLocalStorage()
// })
//
// When ("I enter my username as {string} and password as {string}", (username, password) => {
//     cy.get('#123asawfa').type(username)
//     cy.get('#123asaeaq').type(password)
// })
//
// And ("I clicks on the login button", () => {
//     cy.get('.MuiButton-root').click()
// })
//
// Then ("I should be successfully logged in to the website", () => {
//     cy.url({timeout:30*1000}).should("include", "/dashboard")
//     .and('Dashboard').should("be.visible")
// })
// })