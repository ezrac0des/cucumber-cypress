Feature: capitals
    Scenario Outline: searching capitals
        Given user goes to Google
        When searches for "<capitals>"
        Then user verifies title includes "<capitals>"
        Examples:
            | capitals |
            | london   |
            | paris    |
            | ankara   |
            | ottawa   |