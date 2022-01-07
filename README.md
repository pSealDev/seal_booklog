# PSeal BookLog

## Keep track of the books in your personal library using PSeal BookLog

Made with React, PostGres, and MaterialUI. User can add books to the grid, create/read/update/delete from the book list. Tested with MirageJS, an api mocking library.

Instructions to run:

First, you will need to create a PostGres database, to use this product. Create a db.js file providing a user and password, as well as host and db. 

#####
For example, the db.js file could look like this:

const Pool = require("pg").Pool;

const pool = new Pool({
 user: yourusername,
 password: youruserpassword,
 host: "yourhost",
 database: "yourdatabase"
 })
 
 module.exports = pool; 
 
 #####
 
 Use npm install to get these files.
 
 Then use command "npm start" to start the React app.
 
 Navigate to the server folder and run "npm start" to start the server.
  
  
 Enjoy!

