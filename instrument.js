function getInstrument(){
	var instrumentName = window.location.pathname.split('/')[3];

	Promise.all([
		fetch(`/api/search/?name=${instrumentName}`),
		fetch('/api/families'),
		fetch('/api/clefs'),
    fetch('/api/sounds'),
    fetch('/api/transposes')
	])
		.then(function(responses){
			return Promise.all([
				responses[0].json(),
				responses[1].json(),
				responses[2].json(),
        responses[3].json()
			]);
		})
		.then(function(results) {
      		var instrument = results[0][0];
      		var families = results[1];
      		var clefs = results[2];
          var sounds = results[3];
          var transposes = results[2];

          console.log(results[2]);

      		populateAllFamilies(families);
      		populateAllClefs(clefs);
          populateAllSounds(sounds);
      		setName(instrument);
      		setFamily(instrument);
      		setClef(instrument);
          setSounds(instrument);
          setTransposes(instrument);
      		console.log(results);
      		console.log(instrument);
      		console.log(families);
      		console.log(clefs);
      		
    });
}




function setName (instrument){
	document.getElementById('instrument-name').value = instrument.name;
}

function setFamily(instrument){
	document.getElementById('dropdowns-family').value = instrument.family;
}

function setClef(instrument){
	document.getElementById('dropdowns-clefs').value = instrument.clef;
}

function setSounds(instrument){
  document.getElementById('dropdowns-sounds').value = instrument.sounds;
}

function setTransposes(instrument){
  document.getElementById('dropdowns-transposes').value = instrument.transposes;
}

function populateAllFamilies(families){
  var familyDropdown = document.getElementById('dropdowns-family');

  for (var family of families) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ family } </h5>`;


    familyDropdown.appendChild(optionElement);
  }
}

function populateAllClefs(clefs) {
  var clefDropdown = document.getElementById('dropdowns-clefs');

  for (var clef of clefs) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ result } </h5>`;

    clefDropdown.appendChild(optionElement);
  }
}

function populateAllSounds(sounds){
  var soundsDropdown = document.getElementById('dropdowns-sounds');

  for(var sound of sounds) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ sound } </h5>`;
 }
}

getInstrument();