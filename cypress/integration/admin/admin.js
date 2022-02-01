import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

// ""  ''

// Set Password

Given ("I am on the Create Password page from my mail",() => {
    cy.url().should('include','/employee/password/setup/id-number')
})
And ("I type in and confirm the same password", () => {
    cy.get('.123aq').type('Testing@1234')
    cy.get('.123at').type('Testing@1234')
    cy.get('#PrivateSwitchBase-input css-1m9pwf3').check()
})
Then ("I should get a success notification and taken to the Login page", () => {})

// Log in

Given ("I am on the login page", () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("/login")
})

When ("I enter my username as {string} and password as {string}", (username, password) => {
    // cy.get('#123asawfa').type(username)
    cy.get('[for="123asawfa"] > .icon-input > .icon-input-div').type(username)
    cy.get('#123asaeaq').type(password)
})

And ("I clicks on the login button", () => {
    cy.get('.MuiButton-root').click()
})

Then ("I should be successfully logged in to the website", () => {
    cy.url({timeout:60*1000}).should("include", "/dashboard")
    // .and('Dashboard').should("be.visible")
})

// Add A Product

Given ("I click on the Add Product button", () => {
    // cy.get(".MuiTypography-root MuiTypography-body1 css-1daj8vw").click()
    cy.get('.MuiButton-root > .MuiTypography-root').click()
})

Then ("I fill in the data for Adding a product", () => {
    cy.url().should("include","/dashboard/add-product")
    cy.get("#pn").type("Psychological AI")
    cy.get("#pd").type("Psychological AI Psychological AI Psychological AI Psychological AI")
    cy.get("#pt").type("15")
    cy.get("#mi").type("2500000")
    cy.get("#fs").type("25000")
    cy.get("#ir").type("3")
    cy.get("#ld").type("2022-01-31")
    cy.get("#cd").type("2022-02-02")
    cy.contains("Preview").should("be.visible")
    cy.contains("Preview").should("be.visible")
})
And ("I add a reviewer", () =>{})

And ("I Preview and Publish the product I am about to create", () => {
    // cy.contains("Publish").click()
    // cy.get('a[title = "Submit"]')
    cy.get('.MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-ppd5ni').click()
})

Then ("I should get a successfully created", () => {})

And ("I should see it in the Product table", () => {})


// Reset Password

Given ("I am on the reset password page", () => {
    cy.url().should('include','/password/reset/')
})
When ("I put in the password I want and confirm it", () => {
    cy.get('.123anms').type('P@ssword!')
    cy.get('.123adfs').type('P@ssword!')
})
And ("I click on the reset password page", () => {})
Then ("I should be redirected to the login page", () => {})
