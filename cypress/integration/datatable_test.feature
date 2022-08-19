Feature: login manager
    @manager_id
    Scenario: manager id
        Given user goes to url
        When user clicks on login
        And user uses given data to log in
            | username | password  |
            | manager  | Manager1! |
        And user clicks on login button
        Then user verifies url has changed

    @manage_id2 @smoke
    Scenario: manager id2
        Given user goes to url
        When user clicks on login
        And user uses given data to log in
            | username | password  |
            | manager  | Manager1! |
        And user clicks on login button
        Then user verifies url has changed