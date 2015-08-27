# Lightning Realty 

Lightning Realty is a sample application built with [React](http://facebook.github.io/react/) and the [Lightning Design System](www.lightningdesignsystem.com). 
The back-end is built on Node.js using a Postgres database. 

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/hjIriyZhW-I/0.jpg)](http://www.youtube.com/watch?v=hjIriyZhW-I)



## Automatic Deployment to Heroku

Click the Button below to deploy to Heroku

(available soon)

## Local Installation

1. Install Postgres locally and create a database called **realty**

1. Open **server/config.js** and make sure the databaseURL matches your configuration (use your user name)

1. Navigate to the **lightningrealty** directory and install the project dependencies:

    ```npm install```

1. Type the following command to build the client application:

    ```npm run build-client```
    
1. Type the following command to Start the server:
    
    ```npm start```
    
    > The database is automatically populated
    
1. Open a browser and access http://localhost:5000    


The project is written using ECMAScript 6 including ECMAScript modules.

## Work in Progress

This project is work in progress:
- Make components more robust and general purpose
- Create more components
- Fix React keys throughout the project
- etc.


