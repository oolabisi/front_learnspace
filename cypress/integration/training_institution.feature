Feature: Training Institution

  Scenario: Training Institution registers into LearnSpace

    Given I can navigate to the register page
    Then I enter all the information requested
    And I click on the register button
    Then I get a confirmation mail


  Scenario: Training Institute Email Verification

    When I go to the verification link I got from LearnSpace
    Then I can log in successfully


  Scenario: Training Institute creates a Program

    Given I am logged in on LearnSpace
    When I click on the Add program button
    And I fill in the details to add a program
    And I submit the form
    Then I should see the Program I created



  Scenario: Training Institute View lists of Program created and their details

    Given I am logged in on LearnSpace
    When I click on the View all button
    Then I should see all the Programs I created



  Scenario: Training Institute refers a Student

    Given I am logged in on LearnSpace
    And I click on the View all button
    Then I should see all the programs I created
    And I click on one of the lists
    Then I should be able to see a complete details of the particular product
    And I should be able to click on a Refer a Student
    And I should be able to add the details of Student I want to refer

