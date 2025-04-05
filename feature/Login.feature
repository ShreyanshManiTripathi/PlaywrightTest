Feature: Login functionality

  Scenario Outline: Login with valid credentials
    Given I am on the login page
    When User enters username "<username>"
    And User enters password "<password>"
    And Clicks on Login Button
    Then It Logins

  Examples:
    | username| password |
    | Admin   | admin123 |
