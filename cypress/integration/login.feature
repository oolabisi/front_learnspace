Feature: General Login
  Scenario Outline: Login to LearnSpace platform

    Given I am on the login page
    When I enter my username as '<username>' and password as '<password>'
    And I clicks on the login button
#    Then I should be successfully login to the website

    Examples:
      | username | password |
    | ogunbiyioladapo33@gmail.com | Testing1234@ |
    | faeyemi@gmail.com | p@ssw0rD! |
    | testt@test.com | Test1234@ |