Feature: General Login
  Scenario Outline: Login to LearnSpace platform

    Given User is on the login page
    When User enters username as '<username>' and password as '<password>'
    And User clicks on the login button
    Then User is able to successfully login to the website

    Examples:
      | username | password |
    | ogunbiyioladapo33@gmail.com | Testing1234@ |
#    | faeyemi@gmail.com | p@ssw0rD! |
#    | testt@test.com | Test1234@ |