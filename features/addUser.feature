Feature: Adding a user
  As an concerning stakeholder, I want to make sure I am able to add an user to our user list

  Scenario: Validate that you are on the User List Table
    Given I navigate to the following "webtables"
    Then the page title must be "Protractor practice website - WebTables"
    And the user must see table row headers "First Name Last Name User Name Customer Role E-mail Cell Phone Locked"
    When the user click on Add User button
    Then the user must see "Add User" popup modal

    @user1
    Scenario: Verify user can add user 1
    Given I navigate to the following "webtables"
    And the user click on Add User button
    And the user enters First Name "FName1"
    And the user enters Last Name "LName1"
    And the user enters Username "User1"
    And the user enters Password "Pass1"
    And the user selects Customer "Company AAA"
    And the user must see the value "Company AAA" is selected
   And the user selects Role "Admin"
    And the user enters email address "admin@mail.com"
    And the user enters Cell Phone 082555
    When the user click on Save button
#    And the user refresh the page
    And the user search on email address "admin@mail.com"
#    Then the user must see "FName1 LName1 User1 Company AAA Admin admin@mail.com 82555 Edit" added successfully
    Then the user must only see 1 row
    And the user must see email address "admin@mail.com" in E-mail cell
    And the user must see user name as "User1" in the User Name cell

  @user2
  Scenario: Verify user can add user 2
    Given I navigate to the following "webtables"
    And the user click on Add User button
    And the user enters First Name "FName2"
    And the user enters Last Name "LName2"
    And the user enters Username "User2"
    And the user enters Password "Pass2"
    And the user selects Customer "Company BBB"
    And the user must see the value "Company BBB" is selected
    And the user selects Role "Customer"
    And the user enters email address "customer@mail.com"
    And the user enters Cell Phone 083444
    When the user click on Save button
#    And the user refresh the page
    And the user search on email address "customer@mail.com"
#    Then the user must see "FName2 LName2 User2 Company BBB Customer customer@mail.com 083444 Edit" added successfully
    Then the user must only see 1 row
    And the user must see email address "customer@mail.com" in E-mail cell
    And the user must see user name as "User2" in the User Name cell
