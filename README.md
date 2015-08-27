# React and Lightning Design System Reference Application 

This repository is the home of **Lightning Realty**, a reference application built with [React](http://facebook.github.io/react/) and the [Lightning Design System](www.lightningdesignsystem.com). 

Check out this video for a quick walkthrough:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/UZtvQazYX8A/0.jpg)](http://www.youtube.com/watch?v=UZtvQazYX8A)

The back-end is built with **Node.js** using a **Postgres** database. 

## Automatic Deployment to Heroku

Click the Button below to deploy the application on Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Your own instance of the application is automatically deployed, and your own Postgres database is populated with sample data.

## Local Installation

1. Install [Postgres](http://www.postgresql.org/) locally and create a database called **realty**.

1. Clone this repository or download and unzip [this](https://github.com/ccoenraets/lightning-react-app/archive/master.zip) zip file.

1. Navigate to the **lightning-react-app** directory and install the project dependencies:

    ```npm install```

1. Open **server/config.js** and make sure the **databaseURL** matches your configuration (use your user name)

1. Type the following command to build the client application:

    ```npm run build-client```
    
    The project is written using ECMAScript 6 including ECMAScript 6 modules.

1. Type the following command to start the server:
    
    ```npm start```
    
    The database is automatically populated
    
1. Open a browser and access [http://localhost:5000](http://localhost:5000)    

## Work in Progress

This project is work in progress. For example, here are some items that still need work:

- Make components more robust and general purpose
- Create more components
- Fix React keys throughout the project
- etc.


