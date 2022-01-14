Feature: Training Institution

  Scenario: Training Institution registers into LearnSpace

    Given A training institute is on the register page
    Then He enters all the information requested
    And He clicks on the register button
    Then He gets a confirmation mail


  Scenario: Training Institute Email Verification

    Given I click on the verification link I got from LearnSpace
    Then the link routes me to the Login page
    And I log in successfully


  Scenario: Training Institute creates a Program

    Given I am logged in on LearnSpace
    When I click on the Add program button
    And I fill in the details to add a program
    And I click on submit
    Then I should see the Program I created



  Scenario: Training Institute view lists of Program created and their details

    Given I am logged in on LearnSpace
    When I click on the View all button
    Then I should see all the Programs I created



  Scenario: Training Institute refers a Student

    Given I am logged in on LearnSpace
    And I click on the View All button
    Then I should see all the programs I created
    And I click on one of the lists
    Then I should be able to see a complete details of the particular product
    Then I should be able to click on a Refer a Student
    And I should be able to add the Student(s) I want to refer

