import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given ("User is on the login page", () => {
    cy.visit("/")
})

When ("User enters username as {string} and password as {string}", (username, password) => {
    cy.get('#123asawfa').type(username)
    cy.get('#123asaeaq').type(password)
})

And ("User clicks on the login button", () => {
    cy.get('.MuiButton-root').click()
})

Then ("User is able to successfully login to the website", () => {
    cy.url({timeout:30*1000}).should("include", "/dashboard")
        // .and('Dashboard').should("be.visible")
})