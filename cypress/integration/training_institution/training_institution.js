import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

// ""  ''

// Register

Given ("I can navigate to the register page", () => {})
Then ("I enter all the information requested", () => {
    cy.get(".123asawfa").type("")
    cy.get(".123asaeaq").type("")
    cy.get("").click()
    cy.get(".123asaeaq").click()
    cy.get(".123asaeaq").click()
    cy.contains("Next").should("be.visible")
    cy.contains("Next").click()
    cy.get(".123asawfa").type("")
    cy.get("123asaeaq").type("")
    cy.get("123asae90q").type("")
    cy.get("#PrivateSwitchBase-input css-1m9pwf3").check()
    })
And ("I click on the register button", () => {
    cy.contains("Create An Account").should("be.visible")
    cy.contains("Create An Account").click()
})
Then ("I get a confirmation mail", () => {})

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