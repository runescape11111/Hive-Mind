# MERN Auth Boilerplate

This setup allows for a MERN app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

You will need to create a `.env` file in the root folder with the following environmental variable definitions:

```sh
SESSION_SECRET=
MONGODB_URI=mongodb://localhost/{database_name}
```

After both installations are complete and the `.env` file has been configured, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

1. Create your Heroku app.

2. Create a database on MongoDB Atlas or another MongoDB cloud provider.

3. Add `MONGODB_URI` and `SESSION_SECRET` along with any other environmental variables required by your app
   to the Heroku config.

4. Deploy the app by linking the GitHub repo to your Heroku app or running `git push heroku main`.

## Sessions and Authentication

`express-session` is used to create sessions. Configure the middleware and cookies by editing `config/session.js`. Routes for handling user signup, authentication, and logout have been included in `router/userRouter.js`.

The React Context API is used to provide the `auth state` and functions to handle authentication on the client. `client/src/util/auth.js` exports an `AuthProvider` component and `useAuth` hook to give other components access to auth functions and state. The `PrivateRoute` component may be used to prevent unauthenticated users from accessing a route. The technique used is based on the [auth workflow example](https://reactrouter.com/web/example/auth-workflow) from the React Router documentation.

## Client Side Routing

[React Router DOM](https://reactrouter.com/web/guides/quick-start) is included with some example routes in the initial client.

## Database

This app uses [Mongoose](https://mongoosejs.com/) for schema-based validation of application data.
# mern-boilerplate
