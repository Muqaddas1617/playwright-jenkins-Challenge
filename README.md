# Task for the Youkrit for a testing job.

## Prerequsites
- Jenkins should be installed with docker plugin
- If want more appropriate execution of CI job we can also add agent.
- Important note here if want to run jenkins CI it requires to have docker install on agent to run job.
- For using jenkins to execute these test cases, we need Github Repository URL that will be given in the Jenkins along with credentials
- We also have to give path of the Jenkin file in the configuration then we can build our job and can see the result
- Without Jenkins we can run all test use the command npx palywright test --project=chromium --headed in terminal
- To see the screen shots of the Results using the command 'npx playwright show-report' which give URL for the report

# Scenario Covered:
1)Job search with class B and owner operator enabled 
2)Job Search with Lanefinder Benefits Toggle Button enabled and select Haul Type 'Dry Van' 
3)Job search with company equipment and truct speed 66mph or faster and enabled the toggle button 'Only jobs offering automatic transmission'

## Steps.
1) Undertest site with its base URL: https://www.lanefinder.com
2) Writing test cases for filtering the job search
3) Using Page object Model (POM)
4) Adding a Jenkinfile for playwright docker image and running tests

## Screen shot of my executed test cases is also available in the project directory


### By Muqaddas (Automation Software Test Engineer )

