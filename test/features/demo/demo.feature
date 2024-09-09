Feature: demo feature

@Demo
    Scenario Outline: run the demo feature
        Given google page is opened
        When search with <searchItem>
        Then click on first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID     | searchItem | ExpectedURL           |
            | DEMO_TC001 | WDIO       | https://webdriver.io/|