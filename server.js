// ----------------------------------------------------------------------------------------------------
// BOILERPLATE CODE STARTS HERE
// (Boilerplate code is a section of code that has to be included in with little or no alteration)

// ================================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ================================================================================

var express = require("express");
var bodyParser = require("body-parser");

// ================================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ================================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener

var PORT = process.env.PORT || 8080;        // Need to assign process.env.PORT for Heroku.  process.env.PORT will let Heroku assign
                                            // a port at random.  If that is unavailable, then the port will be assigned to port 8080
                                            // which is the standard default second choice for a webserver.

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// ================================================================================
// LISTENER
// The below code effectively "starts" our server
// ================================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



// BOILERPLATE CODE ENDS HERE



// ----------------------------------------------------------------------------------------------------
// INSTRUCTIONS AND ADDITIONAL NOTES

/*
.gitignore file

For when uploading folder to a GitHub repository.

Create .gitignore file at start of project and include inside it the following lines of code:
node_modules
.DS_Store

It's good practice to always include node_modules in the .gitignore file because this folder can get huge.
We have coded to "require" npm install of any packages necessary for this node app, so if someone clones this repo from
GitHub, all they have to do is npm install any necessary packages for the app to work. Therefore the node_modules folder 
doesn't need to be uploaded to GitHub.



--------------------
npm init -y          (must do this at start of any node project if you are going to be using npm install to install packages!)

At the start of any node project, this must be done:
Navigate to the root of project and type the following into the command line: npm init -y 
This will initialize a package.json file for the project. 
The package.json file is required for installing third party npm packages and saving their version numbers. 
If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for 
anyone else to run your code after cloning your project.

// -y here is used to install all default settings for the package.json file.  If you prefer to look at each setting you are installing,
you can just type:
// npm init
and the command line will ask you about the settings for each.



--------------------
COMMAND LINE commands

Before running this JS file in node, install packages from npmjs.com type the following 
into the command line (the name npm stands for Node Package Manager):
// npm install express
// npm install express-handlebars
// npm install mysql
// npm install body-parser



If a package.json file already exists with dependencies listed inside (if for example you have
cloned this repo from GitHub), then you can just type either of the following without installing 
each individual package manually:
// npm i            // this is just a shorthand version of npm install
// npm install



To check that everything installed properly, type the following into the command line:
// cat package.json

Then check under "dependencies" that is displayed in the command line. If everything installed
properly it will say:
"body-parser": "^1.18.3",       // 1.18.3 is the version number
"express": "^4.16.4",           // 4.16.4 is the version number
"express-handlebars": "^3.0.2", // 3.0.2 is the version number
"mysql": "^2.17.1"              // 2.17.1 is the version number



If cloning a CLI App (Command Line Interface App) like LIRI from a GitHub repository and a package.json file already exists
inside it, you can just type the following into the command line:
npm install  // or:
npm i                    // npm i is just a shortcut version of npm install.
This will install everything listed in the dependencies area of the package.json file.
You don't need to manually install every npm package like:
npm install express                 // or:
npm install express-handlebars      // or:
npm install mysql                   // or:        
npm install body-parser                     // etc.



To run node for server.js, type into the command line:
// node server             // No need to type in .js, although node server.js will work too.



If you need to exit at any point, type into the command line:
// control c



--------------------
NODEMON

Install (just once on your computer):
npm install -g nodemon      // -g will install to the computer's root directory (system file) so it will be available globally outside the folder you are working on (i.e. from any folder on your computer)

By using nodemon any changes you make to the server JS file will update on the server without having to restart the server every time.

Run nodemon by typing into terminal:
nodemon server.js (or nodemon server)



--------------------
IN THE BROWSER

After running either node server or nodemon server, go to the Chrome Browser and type in:
http://localhost:8080
to connect to port 8080



*/