# Personal Website V2
In early 2024, I was promoted at work and became a full-stack engineer, while I had worked with React before, I needed a refresher before diving head-first into the position. I decided to re-write my personal website as a means to self-review in React and Typescript.

## User Guide

# Table of Contents
- [Tools](#tools)
- [Installation and Local Setup](#installation-and-local-setup)
- [Available Scripts](#available-scripts)

## Tools
The following tools are utilized in this project:

### ESLint
Used for linting and code formatting.  VSCode can be set up to automatically lint on file save.

### Husky
This powers the pre-commit hook.


## Installation and Local Setup

Before running the application locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or later recommended)
- [Yarn](https://yarnpkg.com/) package manager

To check if you have `yarn` installed, run:
```bash
yarn --version
```

If you do not have yarn installed, you can install it globally with:
```bash 
npm install -g yarn
```

Install dependencies:

```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### `yarn build`
Builds the app for production to the `dist` folder. This command compiles TypeScript files, bundles the application, and optimizes it for deployment.

### `yarn preview`
Serves the built version of the app in a local environment, allowing you to test how it will function in production. Open [http://localhost:4173](http://localhost:4173/) in the browser to view it.

### `yarn dev`
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173/) to view it in the browser. 
The page will automatically reload whenever you make changes to the source files. You may also see any lint errors in the console.

### `yarn lint`
Runs ESLint on the source code in the src directory and automatically fixes any linting errors that can be resolved. This helps maintain code quality and consistency throughout the project.

### `yarn postinstall`
Initializes Husky to manage Git hooks for the project. This can be useful for enforcing pre-commit checks, such as linting or running tests before pushing changes.