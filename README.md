# seba-team-54
Hiking Web Application. Backend can be found [here](https://github.com/Thiebout/seba-team-54-backend)

### Install Dependencies

We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.com).

```
npm install
```

### Create a Bundle for the Application

This project use [webpack](https://github.com/webpack/webpack) version 1 for creating a bundle of the application and its dependencies

We have pre-configured `npm` to automatically run `webpack` so we can simply do:

```
npm run build
```

Behind the scenes this will call `webpack --config webpack.config.js `.  After, you should find that you have one new folder in your project.

* `dist` - contains all the files of your application and their dependencies.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.
