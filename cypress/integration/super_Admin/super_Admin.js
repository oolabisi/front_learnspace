import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import SuperAdminPage from "./superAdminPage";

Given("I am on the login page", () => {
    SuperAdminPage.Login()
})

When("I enter my username as {string} and password as {string}", (username, password) => {
    SuperAdminPage.LoginDetails(username, password)
})

And("I clicks on the login button", () => {
    SuperAdminPage.Submit()
})

Then("I should be successfully logged in to the website", () => {
    cy.url({timeout: 60 * 1000}).should("include", "/dashboard")
    // .and('Dashboard').should("be.visible")
})


//  Inviting Other Admins

Given("I am on the dashboard", () => {
    cy.url().should("include", "/dashboard")  // {timeout: 30 * 1000}
})
And("I go to the Settings page", () => {
    SuperAdminPage.GoToSettings()
})

And("I click on Manage button", () => {
    SuperAdminPage.GoToInviteManager()
})
When("I add the emails of the Admins I would like to invite and role", () => {
    SuperAdminPage.InviteAdminDetails()
})

And("I click on the Invite button", () => {
    cy.get('.css-1nykvlz').click()
})

Then("I should get a sent notification", () => {
    SuperAdminPage.SendInvite()
})

// Adding Product

Given("I click on the Add Product button", () => {
  SuperAdminPage.GoToProductPage()
})

Then("I fill in the data for Adding a product", () => {
 SuperAdminPage.FillProductDetails()
})

And("I Preview and Publish the product I am about to create", () => {
  SuperAdminPage.PreviewProduct()
})

Then("I should get a successfully created", () => {
    SuperAdminPage.SubmitProduct()
})

And("I should see it in the Product table", () => {
})


// Approve and Publish a Product

Given("I am on the dashboard", () => {
})
When("I go to the Product page", () => {
})
And("I click on the notification card for a new Product", () => {
})
Then("I should be able to Edit the Product", () => {
})
And("I should be able to Publish the product", () => {
})


// Reset Password

// Given("I am on the reset password page", () => {
//     cy.url().should('include', '/password/reset/id-number')
// })
// When("I put in the password I want and confirm it", () => {
//     cy.get('.123anms').type('P@ssword!')
//     cy.get('.123adfs').type('P@ssword!')
// })
// And("I click on the reset password page", () => {
// })
// Then("I should be redirected to the login page", () => {
// })
