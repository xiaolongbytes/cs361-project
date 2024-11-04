# Problem
- Current MyDegree Plan tool offered by Oregon State University does not provide information about or check prerequisites or what quarters courses are offered and only displays course code (with no human legible course name) and credit hours. 
![image](https://github.com/user-attachments/assets/f06aa548-f5ad-4744-b587-637ecdc9efe4)
- Required courses vs. Electives information is buried deep in a Canvas module
- Need to navigate to each course on the ECatalog to see the prereqs. [Example for CS161](https://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=161&termcode=ALL)


# Figma Link
[MyOSUDegreePlanner Prototypes (View Only)](https://www.figma.com/design/uInwn7ScBF7rFUsZ9zd7uM/MyOSUDegreePlanner-Prototypes?node-id=3-3&t=WOPh7GzVrdQXalHd-1)

# Lessons Learned:
- BEM naming convention for class names
    - block__element--modifier
- The Typescript + React FunctionComponent pattern for defining component function signature

# Future Features:
- [ ] Allow custom quarter creation based on a given starting quarter and graduation quarter at start
- [ ] Have adding course to degree plan logic check if the season of the quarter is in the seasons the class is offered
- [ ] Have button to check course order is valid (aka pre-reqs are fulfilled before course is being taken) as current add course logic doesn't check this
- [ ] Add course credits for checking degree requirements (since some courses aren't all 4 credit hours)
- [ ] Track website traffic/usage
- [ ] Easy printable version
- [ ] Allow users to import/export degree plan files so they can save/modify their plans

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
