# Introduction
The goal of this project is to asses your skills as a react developer within a week and see if we can work together as a team. Therefore, while we aim for completion, it's perfectly acceptable if the project isn't fully polished by the end of the week. What's most important is that the following process is followed:

* Daily stand-up meetings to discuss progress and obstacles.
* Each day, after you've wrapped up, please [log the hours](TIME_LOG.md) spent on the project along with a brief description of the work performed.
* Lastly, I encourage you to reach out proactively if you have any questions or if you're seeking assistance with specific issues. 

### Project: Personal Movie Library

#### Overview
Create a small React web application where users can view a list of movies fetched from a public API, add movies to their personal favorites list, and view their list on a protected page after authentication.

#### Functional Requirements

1. **Homepage**:
    - Display a list of popular movies fetched from a public API such as The Movie Database (TMDb).
    - Include a search bar at the top of the page to search for movies by title.
    - Each movie item should display its title, poster image, and a short description.
    - Add a "Favorite" button on each movie to let users add movies to their favorites list.

2. **Favorites Page (Protected)**:
    - This page is only accessible to authenticated users.
    - Display a list of movies that the user has marked as favorites.
    - Allow users to remove movies from their favorites list.

3. **Authentication**:
    - Implement a simple authentication form with a mock login (no back-end necessary, just a front-end simulation).
    - Use a username and password to "log in" (you can have a static user for the demonstration).
    - Once logged in, the user should be redirected to the Favorites page.

4. **State Management**:
    - Use React context or Redux for state management to handle the list of favorite movies and authentication status.

#### Technical Requirements

1. **React Functional Components**: Utilize functional components with React hooks.
2. **Hooks**: Use `useState`, `useEffect`, `useContext` (if using context for state management), and `useReducer` (if needed).
3. **API Calls**: Use `fetch` or `axios` to make API calls to a public movies API.
4. **Routing**: Use `react-router-dom` for routing. The app should have at least two routes: one for the home page and one for the protected favorites page.
6. **Error Handling**: Implement error handling for the API calls and display appropriate feedback to the user.
7. **Loading State**: Show a loading indicator when the movie data is being fetched.
8. **Styling**: Use CSS modules or styled-components for styling the application. The layout should be responsive and work on both desktop and mobile browsers.
9. **Typescript**: Use typescript instead of plain javascript.

#### Deliverables

- Source code pushed to this Git repository
- Time logs pushed to this repository. I'll use this info to pay you at the agreed upon hourly rate.

#### Assessment Criteria

- Correct use of React functional components and hooks.
- Effective state management.
- Clear and sensible component structure.
- Reusability of the components.
- Code readability and cleanliness.
- Proper error handling.
- Responsive design and thoughtful UI/UX.

#### Optional Challenges (If time permits)

- Implement pagination or infinite scrolling for the movie list.
- Use TypeScript for type-checking.
- Add unit tests using Jest and React Testing Library.
- Add end-to-end tests with Cypress.
- Deploy the application to a web server (e.g., Netlify, Vercel, AWS, etc.).



# Getting Started with this Repository

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
