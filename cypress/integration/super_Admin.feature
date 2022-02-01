Feature: Super Admin

  Scenario Outline: I can Log in

    Given I am on the login page
    When I enter my username as '<username>' and password as '<password>'
    And I clicks on the login button
    Then I should be successfully logged in to the website

    Examples:
      | username                    | password     |
      | ogunbiyioladapo33@gmail.com | Testing1234@ |

  Scenario: I can Invite Other Admin(s)

    Given I am on the dashboard
    And I go to the Settings page
    And I click on Manage button
    When I add the emails of the Admins I would like to invite and role
    And I click on the Invite button
#    Then I should get a sent notification

  Scenario: I can Add a Product

#    Given I am on the dashboard
    Given I click on the Add Product button
    When I fill in the data for Adding a product
    And I Preview and Publish the product I am about to create
    Then I should get a successfully created
    And I should see it in the Product table

#  Scenario: I can Approve/Review a Product
#
#    Given I am on the dashboard
#    When I go to the Product page
#    And I click on the notification card for a new Product
#    Then I should be able to Edit the Product
#    And I should be able to Publish the product

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

#  Scenario: I can Reset my password
#
#    Given I am on the reset password page
#    When I put in the password I want and confirm it
#    And I click on the reset password page
#    Then I should be redirected to the login page

#  Scenario: I can Log-out