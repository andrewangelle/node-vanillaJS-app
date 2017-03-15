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

router.get('/families', function(req,res){
  pool.connect()
    .then(function(client) {
      client.release();
      return pool.query('select distinct family from instruments');
    })
    .then(function(results) {
      var families = results.rows.map(function(row) {
        return row.family;
      });

      res.json(families);
    });
});

router.get('/clefs', function(req,res){
  pool.connect()
    .then(function(client) {
      client.release();
      return pool.query('select distinct clef from instruments');
    })
    .then(function(results) {
      var clefs = results.rows.map(function(row) {
        return row.clef;
      });

      res.json(clefs);
    });
});

router.get('/sounds', function(req,res){
  pool.connect()
    .then(function(client) {
      client.release();
      return pool.query('select distinct sounds from instruments');
    })
    .then(function(results) {
      var sounds = results.rows.map(function(row) {
        return row.sounds;
      });

      res.json(sounds);
    });
});

router.get('/transposes', function(req,res){
  pool.connect()
    .then(function(client) {
      client.release();
      return pool.query('select distinct transposes from instruments');
    })
    .then(function(results) {
      var transposes = results.rows.map(function(row) {
        return row.transposes;
      });

      res.json(transposes);
    });
});

router.get('/instrument/update', function(req,res){
  var dbQuery = 'update instruments set';

  var values = Object.keys(req.query)
    .filter(function(key) {
      return key !== 'id';
    })
    .map(function(key) {
      var value = req.query[key];
      return `${key} = '${value}'`;
    }).join(', ');

  dbQuery = `${dbQuery} ${values} where id = '${req.query.id}'`;

  pool.connect()
    .then(function(client){
      client.release();
      return pool.query(dbQuery);
    })
});

router.get('/instrument/create', function(req,res){
  var dbQuery = 'insert into instruments(name,family,clef,sounds,transposes)';

  var values = Object.keys(req.query)
    .map(function(key) {
      var value = req.query[key];
      return `'${value}'`;
    }).join(',');

  dbQuery = `${dbQuery}values(${values});`;

  console.log(dbQuery);

  pool.connect()
    .then(function(client){
      client.release();
      return pool.query(dbQuery);
    })
    .catch((error) => {
      console.log(error);
      error;
    })
});

app.get('/admin/instruments', function(req, res) {
  res.sendFile('instruments.html', { root: process.cwd() });
});

app.get('/admin/instrument/:instrumentName/edit', function(req, res) {
  res.sendFile('instrument.html', { root: process.cwd() });
});

app.get('/admin/instrument/create', function(req, res) {
  res.sendFile('create-instrument.html', { root: process.cwd() });
});

//REGISTER OUR ROUTES-------------------------------
//all of our routes will be prefixed with /api
app.use('/api', router);

// Serve all static files in the root directory
app.use(express.static(__dirname));


// START THE SERVER
//==========================================================================

app.listen(port);
console.log('port at : ' + port);
 
