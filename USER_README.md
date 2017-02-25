# Node Instrument Search App

## Requirements

```sh
	Node.js
	PostgresSQL
```

## Project Goals



## Technologies Used

Server built using Express:
(source code can be viewed in server.js)

```js
// server.js

// BASE SETUP
//====================================================================

//Call the packages we need

var express = require('express'); 		//call express
var app = express();					//define our app using express
var bodyParser = require('body-parser');
var pg = require('pg');
var dotenv = require('dotenv');

dotenv.load();


//configure app to use bodyParser()
//this will allow us to get data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//set our port

//ROUTES FOR API
//======================================================================

var router = express.Router();			//get an instance of the express router
var pool = new pg.Pool();

//TEST ROUTE to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res){
	res.json({message:'Welcome!'})
});

// Additional API Routes:-------------------------------------
--------------------------------------------------------------


//REGISTER OUR ROUTES-------------------------------
//all of our routes will be prefixed with /api
app.use('/api', router);

// Serve all static files in the root directory
app.use(express.static(__dirname));


// START THE SERVER
//==========================================================================

app.listen(port);
console.log('port at : ' + port);

 ```

Database and API calls are handled using PostgresSQL:
(database can be viewed in instruments.js)

```js
router.get('/search', function(req,res) {
  var dbQuery = 'select * from instruments where true';

  for (var key in req.query) {
    var value = req.query[key];
    dbQuery = `${dbQuery} and ${key} = '${value}'`;
  }

  pool.connect()
    .then(function(client) {
      client.release();
      return pool.query(dbQuery);
    })
    .then(function(results) {
      var instruments = results.rows;
      res.json(instruments);
    });
});

```

## User instruction

Install dependencies:

```
$ npm install
```

Start the server:

```
$ npm start
```

App can be viewed locally at [http://localhost:8080](http://localhost:8080)


