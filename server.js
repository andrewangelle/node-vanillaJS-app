// server.js

// BASE SETUP
//====================================================================

//Call the packages we need

var express = require('express'); 		//call express
var app = express();					//define our app using express
var bodyParser = require('body-parser');
var _ = require('underscore-node');


//configure app to use bodyParser()
//this will allow us to get data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//set our port

//ROUTES FOR API
//======================================================================

var router = express.Router();			//get an instance of the express router

// MOCK DATABASE
//===========================================================================
var instruments = [
{
	name: 'Trumpet',
	family: 'Brass',
	pitch: 'B-flat',
	sounds: 'M2 lower',
	transposes: 'M2 higher',
	clef: 'Treble',
},
{
	name: 'Trombone',
	family: 'Brass',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Bass',
},
{
	name: 'Bass Trombone',
	family: 'Brass',
	pitch: 'Concert Pitch',
	sounds: 'P8 lower',
	transposes: 'P8 higher',
	clef: 'Bass',
},
{
	name: 'Tuba',
	family: 'Brass',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Bass',
},
{
	name: 'French Horn',
	family: 'Brass',
	pitch: 'F natural',
	sounds: 'P5 lower',
	transposes: 'P5 higher',
	clef: 'Treble',
},
{
	name: 'Coronet',
	family: 'Brass',
	pitch: 'B-flat',
	sounds: 'M2 lower',
	transposes: 'M2 higher',
	clef: 'Treble',
},
{
	name: 'Drums',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Cymbals',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Piano',
	family: 'Percussion',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Grand Staff',
},
{
	name: 'Triangle',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Chimes',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Glockenspiel',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Timpani',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Bells',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Xylophone',
	family: 'Percussion',
	pitch: '',
	sounds: '',
	transposes: '',
	clef: '',
},
{
	name: 'Vibraphone',
	family: 'Percussion',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Grand Staff',
},
{
	name: 'Mirimba',
	family: 'Percussion',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Treble',
},
{
	name: 'Harpsichord',
	family: 'Strings',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Grand Staff',
},

{
	name: 'Violin',
	family: 'Strings',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Treble',
},
{
	name: 'Cello',
	family: 'Strings',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Bass',
},
{
	name: 'Viola',
	family: 'Strings',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Alto,Treble',
},
{
	name: 'Harp',
	family: 'Strings',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Grand Staff',
},
{
	name: 'Guitar',
	family: 'Strings',
	pitch: 'n/a',
	sounds: 'P8 Lower',
	transposes: 'P8 higher',
	clef: 'Treble',
},
{
	name: 'Double Bass',
	family: 'Strings',
	pitch: 'n/a',
	sounds: 'P8 lower',
	clef: 'Bass',
},
{
	name: 'Flute',
	family: 'Woodwinds',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Treble',
},
{
	name: 'Piccolo',
	family: 'Woodwinds',
	pitch: 'n/a',
	sounds: 'P8 higher',
	transposes: 'P8 lower',
	clef: 'Treble',
},
{
	name: 'Clarinet',
	family: 'Woodwinds',
	pitch: 'Bb',
	sounds: 'M2 lower',
	transposes: 'M2 higher',
	clef: 'Treble',
},
{
	name: 'Clarinet',
	family: 'Woodwinds',
	pitch: 'A',
	sounds: 'm3 lower',
	transposes: 'm3 higher',
	clef: 'Treble',
},
{
	name: 'Clarinet',
	family: 'Woodwinds',
	pitch: 'Eb',
	sounds: 'M6 lower',
	transposes: 'M6 higher',
	clef: 'Treble',
},
{
	name: 'Bass Clarinet',
	family: 'Woodwinds',
	pitch: 'Bb',
	sounds: 'M9 lower',
	transposes: 'M9 higher',
	clef: 'Bass',
},
{
	name: 'Bassoon',
	family: 'Woodwinds',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Bass',
},
{
	name: 'Contrabassoon',
	family: 'Woodwinds',
	pitch: 'n/a',
	sounds: 'P8 lower',
	transposes: 'P8 higher',
	clef: 'Bass',
},
{
	name: 'Oboe',
	family: 'Woodwinds',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Treble',
},
{
	name: 'Organ',
	family: 'Woodwinds',
	pitch: 'Concert Pitch',
	sounds: 'Concert Pitch',
	transposes: 'none',
	clef: 'Treble',
},
];

//TEST ROUTE to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res){
	res.json({message:'Welcome!'})
});

// Additional API Routes:-------------------------------------
router.get('/search', function(req,res) {
	var filteredInstruments = instruments;

	for(key in req.query){
		console.log(key);

		var value = req.query[key];
		console.log(value);

		filteredInstruments = filteredInstruments.filter(function(instrument){
			return instrument[key] === value;
		});
	}
	res.json(filteredInstruments);
});

router.get('/instruments/:instrumentName', function(req, res){
	var instrumentName = req.params.instrumentName;

	/*
	*Give back the instrument that matches
	*the instrument name passed via the URL
	*/

	var instrument = instruments.filter(function(instrument){
		return instrument.name === instrumentName;
	});

	res.json(instrument);
});

router.get('/family/:instrumentFamily', function(req,res){
	var instrumentFamily = req.params.instrumentFamily;

	/*
	*Give back a list of all the instruments that match
	*the family passed via the URL
	*/

  var instrumentList = instruments.filter(function(instrument) {
    return instrument.family === instrumentFamily;
  });

	res.json(instrumentList);
});

router.get('/clef/:instrumentClef', function(req,res){
	var instrumentClef = req.params.instrumentClef;

	/*
	*Give back a list of all the instruments that matches
	*the clef attribute passed via the URL
	*/

  var instrumentList = instruments.filter(function(instrument) {
    return instrument.clef === instrumentClef;
  });

	res.json(instrumentList);
});

router.get('/families', function(req,res){

	/*
	*Give back a list of all the possible families in database
	*/
  var familyList = instruments.map(function(instrument) {
    return instrument.family;
  	});
  var uniqueFamilyList = _.uniq(familyList);

	res.json(uniqueFamilyList);
});

router.get('/clefs', function(req,res){

	/*
	*Give back a list of all the possible families in database
	*/
  var clefList = instruments.map(function(instrument) {
    return instrument.clef;
  	});
  var uniqueClefList = _.uniq(clefList);
 
	res.json(uniqueClefList);
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
 
