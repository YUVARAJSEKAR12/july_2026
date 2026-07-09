@smoke_one
Feature: Login functionality

  Background:
  #Given user launches the application

  Scenario: Verify user login with valid credentials
    When user enters valid username and password
    And user clicks on login button
    Then user should navigate to search hotel page


  Scenario: Valid the login details
    When Enter the username "YUvaraj"
    And Enter the password "Sekar"

  @raw
  Scenario: Validate the raw concept
    When user enter the raw details
      | Test  | Admin  |
      | test1 | admin1 |
      | test2 | admin2 |


  @rows
  Scenario: Validate the rows concept
    When user enter the rows details
      | Test  | Admin  |
      | test1 | admin1 |
      | test2 | admin2 |


  @hashes
  Scenario: Validate the hashes concept
    When user enter the hashes details
      | Test  | Admin  |
      | test1 | admin1 |


  @rowsHash
  Scenario: Validate the rowsHash concept
    When user enter the rowsHash details
      | Test  | test1  |
      | Admin | admin1 |