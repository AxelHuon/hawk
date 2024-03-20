# User Session Management in React

This guide provides an overview and example usage of our user session management system built with React's Context API. This system allows for global state management of user sessions, facilitating the process of authentication and user state access throughout the application.

## Setup

First, ensure that you have implemented the `SessionContext`, `SessionContext`, and `useSession` hook as outlined in the provided TypeScript code.

### SessionContext

Wrap your application's root component with `SessionContext` to ensure that the user session state is accessible throughout your application.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main App component
import { SessionContext } from './SessionContext'; // Import SessionContext

ReactDOM.render(
  <SessionContext>
    <App />
  </SessionContext>,
  document.getElementById('root'),
);
```

### Using useSession

Anywhere in your application, you can use the `useSession` hook to access or update the user's session state.

Example: Displaying the user's name if they are logged in.

```jsx
import React from 'react';
import { useSession } from './SessionContext'; // Import useSession

const UserProfile = () => {
  const { user } = useSession(); // Destructure to get user

  if (!user) {
    return <div>Please log in.</div>;
  }

  return <div>Welcome, {user.username}!</div>;
};

export default UserProfile;
```
