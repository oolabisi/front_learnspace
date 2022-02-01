import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit("/login")

})

When("I enter my username as {string} and password as {string}", (username, password) => {
    // cy.get('#123asawfa').type(username)
    cy.get('[for="123asawfa"] > .icon-input > .icon-input-div').type(username)
    cy.get('#123asaeaq').type(password)
})

And("I clicks on the login button", () => {
    cy.get('.MuiButton-root').click()
})

Then("I should be successfully logged in to the website", () => {
    cy.url({timeout: 60 * 1000}).should("include", "/dashboard")
    // .and('Dashboard').should("be.visible")
})


//  Inviting Other Admins

Given("I am on the dashboard", () => {
    cy.url({timeout: 30 * 1000}).should("include", "/dashboard")
})

And("I go to the Settings page", () => {
    // cy.get('.css-102swli').click()
    cy.get('[data-testid="SettingsIcon"]').click()
    // {force: true}
    cy.url().should("include", "/dashboard/settings")
})

And("I click on Manage button", () => {
    cy.get('[href="/dashboard/settings/manage-employee"]').click()
    cy.url().should("include", "/dashboard/settings/manage-employee")
})

When("I add the emails of the Admins I would like to invite and role", () => {
    cy.get("#tags-standard").type("tempo0@mailpoof.com{enter}")
    cy.get('#demo-simple-select').click()
    cy.get('.MuiPaper-root > .MuiList-root > .Mui-selected').click()
    // cy.get('MuiList-root MuiList-padding MuiMenu-list css-r8u8y9').select("Portfolio Manager")
})

And("I click on the Invite button", () => {
    cy.get('.css-1nykvlz').click()
})

// Then ("I should get a sent notification", () => {
//     cy.get(".Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter").should("include", "An invite has been sent")
//     // cy.get('.Toastify__toast-body > :nth-child(2)').should("include", "An invite has been sent")
//     // cy.get("#v0p72xip0").should("have", "An invite has been sent")
//     // cy.get('[data-top="45.60000038146973"]').should("include", "An invite has been sent")
//     // cy.get("#tags-standard").should("include","tempo0@mailpoof.com")
//
// })


//Adding Product

// Given ("I am on the dashboard", () => {
//     cy.url({timeout:30*1000}).should("include", "/dashboard")
//     })

Given("I click on the Add Product button", () => {
    // cy.get(".MuiTypography-root MuiTypography-body1 css-1daj8vw").click()
    cy.get('.MuiButton-root > .MuiTypography-root').click()
})

Then("I fill in the data for Adding a product", () => {
    cy.url().should("include", "/dashboard/add-product")
    cy.get("#pn").type("Psychological AI")
    cy.get("#pd").type("Psychological AI Psychological AI Psychological AI Psychological AI")
    cy.get("#pt").type("15")
    cy.get("#mi").type("2500000")
    cy.get("#fs").type("25000")
    cy.get("#ir").type("3")
    cy.get("#ld").type("2022-02-01")
    cy.get("#cd").type("2022-02-04")
})

And("I Preview and Publish the product I am about to create", () => {
    cy.contains("Preview").should("be.visible")
    cy.contains("button","Preview").click()
})

Then("I should get a successfully created", () => {
    cy.contains("Submit").should("be.visible")
    cy.contains("button","Submit").click()
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
