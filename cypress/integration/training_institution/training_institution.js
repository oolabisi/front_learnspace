import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

// ""  ''

// Register

Given ("I can navigate to the register page", () => {
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.visit("/register")
        .wait(3000)
})
Then ("I enter all the information requested", () => {
    cy.get('[for="123asawfa"] > .icon-input > .icon-input-div').type("Group of School")
    cy.get(':nth-child(2) > .icon-input > .icon-input-div').type("jqcfhbjimcxbswtgyd@bvhrk.com")
    // cy.get('[for="123asaeaq"] > .icon-input > .icon-input-div').click()
    cy.get("div").contains("Choose a type").click()
        // .should("be.visible")
    // cy.contains("select", "Choose a type").click()
    // cy.get('[for="123asaeaq"]').eq(-1).click()
    // within(div => { cy.get() })
    // cy.get(':nth-child(3) > .icon-input > .icon-input-div').type("PROFESSIONAL").click()
    // cy.get(':nth-child(4) > .icon-input > .icon-input-div').select("PART TIME")
    // cy.contains("Next").should("be.visible")
    // cy.contains("Next").click()
    // cy.get(".123asawfa").type("AQ23123457")
    // cy.get("123asaeaq").type("09876543RF")
    // cy.get("123asae90q").type("Testing@123")
    // cy.get("#PrivateSwitchBase-input css-1m9pwf3").check()
    })
// And ("I click on the register button", () => {
//     cy.contains("Create An Account").should("be.visible")
//     cy.contains("Create An Account").click()
// })
// Then ("I get a confirmation mail", () => {})

// Email Verification

When ("I go to the verification link I got from LearnSpace", () => {})
Then ("I can log in successfully", () => {})

// Create Program

Given ("I am logged in on LearnSpace", () => {})
When ("I click on the Add program button", () => {})
And ("I fill in the details to add a program", () => {})
And ("I submit the form", () => {})
Then ("I should see the Program I created", () => {})

// View Programs created

Given ("I am logged in on LearnSpace", () => {})
When ("I click on the View all button", () => {})
Then ("I should see all the Programs I created", () => {})

// Refer a Student

Given ("I am logged in on LearnSpace", () => {})
And ("I click on the View all button", () => {})
Then ("I should see all the programs I created", () => {})
And ("I click on one of the lists", () => {})
Then ("I should be able to see a complete details of the particular product", () => {})
And ("I should be able to click on a Refer a Student", () => {})
And ("I should be able to add the details of Student I want to refer", () => {})