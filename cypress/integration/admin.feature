Feature: Admin

  Scenario: I can set my Password

    Given I am on the Create Password page from my mail
    And I type in and confirm the same password
    Then I should get a success notification and taken to the Login page


  Scenario Outline: I can Log in

    Given I am on the login page
    When I enter my username as '<username>' and password as '<password>'
    And I clicks on the login button
    Then I should be successfully logged in to the website

    Examples:
      | username                    | password     |
      | cztrdsifsbqisfifxz@kvhrw.com | Testing1234@ |

  Scenario: I can Add a Product

    Given I am on the dashboard
    And I click on the Add Product button
    When I fill in the data for Adding a product
    And I add a reviewer
    And I Preview and Publish the product I am about to create
    Then I should get a successfully created
    And I should see it in the Product table

  Scenario: I can Reset my password

    Given I am on the reset password page
    When I put in the password I want and confirm it
    And I click on the reset password page
    Then I should be redirected to the login page

  Scenario: I can Log-out


#  Scenario: I can Verify an Institute
#
#  Scenario: I can Reject an Institute
#
#  Scenario: I can Approve a Program
#
#  Scenario: I can Reject a Program
#
#  Scenario: I can Approve a Loan
#
#  Scenario: I can Reject a Loan