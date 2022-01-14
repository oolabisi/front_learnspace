import {Given, Then, And} from "cypress-cucumber-preprocessor/steps";

Given ("An admin is on the dashboard page", () => {
    cy.url({timeout:30*1000}).should("include", "/dashboard")
    })

And ("He clicks on the Add Product button", () => {
    cy.get(".MuiTypography-root MuiTypography-body1 css-1daj8vw").click()
})

Then ("He fills the product details", () => {
    cy.url().should("product")
    cy.get("#pn").type("Psychological AI")
    cy.get("#pd").type("Psychological AI Psychological AI Psychological AI Psychological AI")
    cy.get("#pt").type("15")
    cy.get("#mi").type("2500000")
    cy.get("#fs").type("25000")
    cy.get("#ir").type("3")
    cy.get("#ld").type("01/18/2022")
    cy.get("#cd").type("01/29/2022")
    cy.get("MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-undefined css-kyse2m").click()
})

// And ("He select an approver for the product", () => {})

Then ("He previews and saves the product He created", () => {
    cy.get("MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-ppd5ni").click()
})

