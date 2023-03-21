# INFO2300-A3 - Timothy Nigh

This repository exists for two main purposes:
1. To fulfil the requirements of INFO2300's second assignment demonstrating continuous integration
2. To attempt to demonstrate the use of Node.js as a very basic web server, capable of serving static html pages from a directory structure with a minimum of external packages

## Where is this live?
The application can be found at the following link: https://seahorse-app-v54i4.ondigitalocean.app/

## Repository information

All code can be found under the 'Code' tab. 

Similarly, any issues will be found under the issues tab. 

## Contribution information

The main branch is protected. If you desire to contribute to the project, you can take any open issue.

New functionality must have 80% unit test coverage. 

Follow the existing formatting guidelines, and do not include formatting changes in a pull request with other changes. If you have both formatting and functional changes, please create two separate pull requests. 

## Build/deployment information
In order to run the application, the user must have Node.js installed. 

Once the user has a copy of the application, the user can simply run the following command in the root folder of the repo to run the project:
`node index.js`

The main branch of this repository is monitored by a CI/CD pipeline. When changes are made to this repository, the pipeline will automatically pull the latest code and rebuild and redeploy the application.

## Roadmap
If there are any issue, please create a new issue in the issue tab. Feel free to tag it as you deem appropriate. Abuse of tags will result in a ban.

The project currently maintains a single main branch. Once the project is more than a month old, there will be a STABLE branch created. Changes made to MAIN will be brought into stable after a 2 week period, and the STABLE branch will be under a much stricter deployment schedule.
