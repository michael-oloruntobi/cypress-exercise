## Prerequisites

- Node = 16
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`

## Automated UI Tests

This test suite leverages Cypress, a popular open-source framework for automating end-to-end (E2E) tests in modern web applications.

**Cypress Benefits:**

- Easy to Use: Write tests in JavaScript, familiar to most developers.
- Visual Debugging: Pinpoint issues directly in the browser during tests.
- Automatic Waiting: No need for manual waiting for elements to load.
- Faster Runs: Parallel test execution speeds up test suite runs.

This Cypress-powered suite ensures the application's functionality and reliability through automated testing.

## Prerequisites

- Node = 16
- NPM >= 5.6

### Installation

Ensure you have Node (version 16) and npm installed on your machine. After cloning the project repository, navigate to the project root directory and run the following command to install the necessary dependencies:

```shell
npm install
```

### Usage

To run the automated UI tests, follow these steps:

Start a local development server to compile the frontend code. You can do this by running the following command in a separate shell:

```shell
npm start
```

Before running tests, it's important to prepare the report folders. You can do this by executing the following command:

```shell
npm run clean:reports
```

Open Cypress to view the test suite and run individual tests:

```shell
npx cypress open
```

Alternatively, you can run all tests in headless mode:

```shell
npx cypress run
```

To run a specific test file via cli, use the following command:

```shell
npx cypress run --spec path/to/cypress/test/file.spec.js
```

After running the tests, generate test reports using the following command:

```shell
npm run posttest
```

## Test Reports

Test reports are generated automatically after running the tests using the following command:

```shell
npm run posttest
```

These reports are then stored in the `cypress/reports/mochareports/` folder.

## Continuous Integration

Continuous integration is configured with GitHub Actions, providing automated testing for both pull requests and the main branch.

## Contact

For any questions or issues, please reach out to michael.oloruntobi@gmail.com.
