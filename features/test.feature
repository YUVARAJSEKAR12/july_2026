Feature: Scenario outline concept

    @smoke_scenario_outline
    Scenario Outline: Validate the login details
        When Enter the user "<username>"
        And Enter the pass "<password>"
        Examples:
            | username | password |
            | Admin1   | pass1    |
            | Admin2   | pass2    |
            | Admin3   | pass3    |
            | Admin4   | pass4    |

