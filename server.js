// ----------------------------------------------------------------------------------------------------
// BOILERPLATE CODE STARTS HERE
// (Boilerplate code is a section of code that has to be included in with little or no alteration)

// ================================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ================================================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

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

// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ================================================================================
// ROUTER
// The route gives our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

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
RUN SQL FILE TO CREATE DATABASE

From the Mac Finder, open the schema.sql file in Sequel Pro.

From the middle right of the page where there is a drop down menu that says "Run Previous",
select "Run All Queries" from the drop down list. This will create the database (and table
if the .sql file has the populate-database instructions inside it after the database-creation
instructions. See notes below if the database-creation instructions are in a separate .sql
file from the populate-database instructions .sql).



--------------------
IMPORT DATABASE CONTENT (IMPORT .sql FILE OR .csv FILE)    

In the Sequel Pro App, select File / Import 
Then select the .sql file that contains the instructions (i.e. the code) to populate database content
This is the file that has the instructions:

    // INSERT INTO
and // VALUES

In this case we would import seeds.sql.

Since this is a .sql file with 
populate-database instructions (unlike a csv without instructions), instead of doing File/Import
in Sequel Pro, we can go to the Mac Finder, locate the seeds.sql file and from there open 
in Sequel Pro. From the middle right of the page where there is a drop down menu that says 
"Run Previous", select "Run All Queries" from the drop down list. This will create the table.



Sometimes, the populate-database instructions may or may not be a separate .sql file from the .sql file that 
had the instructions to create the database and table itself.  So we could put the content of seeds.sql 
(populate-database instructions) at the bottom of the schema.sql file (create-database instructions)
if we wanted to.  But in our case we separated the create-database instructions (schema.sql)
from the populate-database instructions (seeds.sql). This is just purely to keep things organized.

If the create-database instructions are in another .sql file (like in our case here), then you must have 
selected and be inside the database you just created in Sequel Pro before importing the .sql that has the 
populate-database instructions.



You could also select File / Import and then import a .csv file and this would import all the data that is
in that file. 

.csv file can be created and saved from an Excel spreadsheet.



For CSV import:
Make sure that when the import prompt appears to map out the CSV fields properly. To do this, click on 
each CSV field and this would show a drop down menu.  From there choose the corresponding to match
the Table Target Fields that is in the column on the right (next to the CSV Fields column).



Once these steps are done, the data is now imported to the database in Sequel Pro.



--------------------
REFRESH DATABASE CONTENT

To refresh the database content in Sequel Pro, press the "refresh table contents" button at the bottom
of the "Content section" of the databse.  You could also press on your keyboard:
// command r



--------------------
EXPORT DATABASE CONTENT

You can also select File / Export and your database as a SQL file.
It is good practice to export and save your database as a SQL file periodically with the date 
in the file name because each time you import a .csv file or .sql file to your database, 
it will overwrite any previous database entries that you previously had for a particular database.

So for example, let's say you have created a database called burgers_DB and within that you have
created a table called products. 
If you imported a SQL file or CSV file to the products table within burgers_DB,
and then later on you once again imported a SQL file or CSV file to the products table within burgers_DB,
the second import will overwrite all the data from the first import.



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
// npm install method-override



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
"method-override": "^3.0.0",    // 3.0.0 is the version number



If cloning a CLI App (Command Line Interface App) like LIRI from a GitHub repository and a package.json file already exists
inside it, you can just type the following into the command line:
npm install  // or:
npm i                    // npm i is just a shortcut version of npm install.
This will install everything listed in the dependencies area of the package.json file.
You don't need to manually install every npm package like:
npm install express                 // or:
npm install express-handlebars      // or:
npm install mysql                   // or:        
npm install body-parser             // or:
npm install method-override                 // etc.



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