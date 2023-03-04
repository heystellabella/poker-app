# About
This application teaches users how to play poker from scratch. 

# Technologies Used
1. React JS
2. React Router
3. Material UI

# Approach taken
High Level Scope Approach:
1. React JS App was created
2. Components within the app to render pages and subpages of the website were created
3. Using react router, the components were linked together

Hand Ranking Game:
1. Data file for hand combinations created. This was an array of objects representing poker hands. Each hand had a name, id, and ranking value assigned to it.
2. Created a component to render the widget for one hand (HandWidget.js)
3. Created a component to map all the hands using the component in (2.) and the data file. This component renders all the hand widgets. (HandWidgets.js)
4. Created another component that uses the above two components (2, 3) to creat the game. (Hands.js)

Hand Ranking Game Logic:
1. Two "lists" are created, one to represent the user's starting list of all hands, one to represent the list that the user arranges the hands into. I used useState from react to create this.
2. Wrote functions to handle when the widget is being dragged, to keep track of the current hand.
3. Wrote 2 separate functions to handle when the dragged (current/selected) widget has been dropped - will add to the receiving list and simultaneously remove it from the outgoing list.
4. Wrote a function to handle when the user submits an answer. This hands the three cases:
    - Correct answer
    - Incorrect answer
    - Incomplete answer
5. Wrote function to reset the game. Sets all the states back to initial.

# Installation instructions
1. Run: `yarn install`
    - To install dependancies
2. Install the React Router Library
    - For yarn: `yarn add react-router-dom`
    - Referece: https://v5.reactrouter.com/core/guides/quick-start/installation

3. Install Jest for testing
    - For yarn: `yarn add --dev jest`
    - Referece: https://jestjs.io/docs/getting-started

4. Install Material UI
    - yarn add @mui/material @emotion/react @emotion/styled

5. To run:
    - For yarn: `yarn start`

# Unsolved Problems
1. The hand ranking game currently does not allow the user to reshuffle the widgets once selected in the drop area, they must drag it back to the initial list section and redrag in the desired order.

2. Once the modal is open, you can still scroll on the screen that it is overlaying.
____________________

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

