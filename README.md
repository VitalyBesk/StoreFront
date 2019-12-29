This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Conclusions and Observations

### What is missing:

- links for the product category are formed by the title of the product. The idea makes sense, but in my opinion, space should be replaced with another character, for example, with “-”.
- usually, the cart after updating the page should save the selected products and their quantity. You can use localStorage for this.
- lazy loading of chunks when switching from one route to another.
- should be 404 page. I just redirect to home page if a route does not match

### What improved:

- in my opinion, when the user is on the product page and if in the counter the quantity of product is greater than the already added quantity, then when you click on the "Add to Cart" button, the quantity should increase by the amount indicated in the counter. Otherwise, it should only increment by 1.
- added a state when the cart is empty
- added disabled state of buttons

### Testing:

- I chose BaseCounter as component for testing. It is reused in some parts of the application and in my opinion it is a suitable component for testing. For testing used Jest and Enzyme. Just type `yarn test` or `npm run test` in CLI to run the test.
