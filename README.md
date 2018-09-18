# Phone Picker

[![CircleCI](https://circleci.com/gh/edoparearyee/phone-picker.svg?style=shield)](https://circleci.com/gh/edoparearyee/phone-picker)

A simple phone picker app built using [React][react] and [Redux][redux]. This project was created using [create-react-app][create-react-app].

## Getting started

To get started you can simply clone the repository and install the dependencies. To run or build the app you must have a recent version of [Node.js][node].

### Clone the repository

Clone the repository using [git][git]

```bash
cd path/to/parent/directory
git clone git@github.com:edoparearyee/phone-picker.git
cd phone-picker
```

### Install dependencies

Dependencies can be installed using either [npm][npm] or [yarn][yarn] by running `yarn install` or `npm install`. Dependencies will be located in `node_modules`.

## Usage

### Run the development server

Run `yarn start` to run the app in development server. Navigate to `http://localhost:3000/`. The app will automatically update on any change of the source files.

### Run the storybook server

Components are built in isolation using [Storybook][storybook]. Run `yarn storybook` to run the storybook server. Navigate to `http://localhost:9009/`. [Storybook][storybook] will automatically update on any changes to source files.

### Running tests

Test are run using [Jest][jest]. E2E tests also also use [Puppeteer][puppeteer] as well as [Jest][jest]. Run `yarn test` to run tests in watch mode. This will run both unit and E2E tests.

To run tests once run `CI=true npm test`.

### Building the app

To create a build to deploy for a production environment run yarn build. The build artifacts can be found in the `build/` directory.


[react]: https://reactjs.org/
[create-react-app]: https://github.com/facebook/create-react-app
[redux]: https://redux.js.org/
[git]: http://git-scm.com/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/en/
[storybook]: https://storybook.js.org/
[jest]: https://jestjs.io/
[node]: https://nodejs.org/en/
[puppeteer]: https://github.com/GoogleChrome/puppeteer
