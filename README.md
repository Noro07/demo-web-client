# demo-web-client

[![Build Status](https://travis-ci.com/Noro07/demo-web-client.svg?branch=master)](https://travis-ci.com/Noro07/demo-web-client)

This is a demo for developing an web client for all skills
Monorepo that contains React and Redux. Built with Webpack. The project is served on Node JS Express server. Managed by Lerna.

## Set up
Install all dependencies:
> npm run link-packages

### Run dev mode
Dev mode enables webpack-dev-middleware, will cause Webpack to compile files in-memory - code changes are saved and updated

1. `npm run start:dev` to start web server.
2. Go to browser and hit http://localhost:3000/people to launch.

## Unit tests
All cases are written in Jasmine, executing via Karma on Chrome Headless. Code coverage is run by istanbul.

1. Run `npm run test:unit` to start the Unit Test.
2. Review packages/*/tests/out/unit for UT reports.
3. Review packages/*/tests/out/coverage for UT coverage reports.

## E2e tests
Use protractor to set up framework and all cases are written in Jasmine.

1. Ensure the web server is running, run `npm run start:test` to start a web server in background.
2. Run npm run test:e2e to start the E2E testing.
3. Review packages/*/tests/out/e2e for E2E testing reports.

## Static Analysis (Eslint)
All projects are covered with eslint rules standard eslint-config-airbnb

Run `npm run check:lint` to do the lint check.
