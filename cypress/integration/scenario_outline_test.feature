Feature: capitals
Scenario Outline: searching capitals
Given user goes to Google
When searches for "<capitals>"
Then user verifies search is complete
Examples:
| capitals |
| london   |
| paris    |
| ankara   |
| ottawa   |