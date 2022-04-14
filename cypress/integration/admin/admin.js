import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import AdminPage from "./adminPage";

// ""  ''

// Set Password

Given ("I am on the Create Password page from my mail",() => {
    AdminPage.LinkFromEmail()
})
And ("I type in and confirm the same password", () => {
  AdminPage.AdminPasswordDetail()
})
Then ("I should get a success notification and taken to the Login page", () => {
    AdminPage.Submit()
})

// Log in

Given ("I am on the login page", () => {
       cy.visit("/login")
})

When ("I enter my username as {string} and password as {string}", (username, password) => {
    AdminPage.LoginDetail(username, password)
})

And ("I clicks on the login button", () => {
    cy.get('.MuiButton-root').click()
})

Then ("I should be successfully logged in to the website", () => {
    cy.url({timeout:60*1000}).should("include", "/dashboard")
})

// Add A Product

Given ("I click on the Add Product button", () => {
    cy.get('.MuiButton-root > .MuiTypography-root').click()
})

Then ("I fill in the data for Adding a product", () => {
 AdminPage.ProductDetail()
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
