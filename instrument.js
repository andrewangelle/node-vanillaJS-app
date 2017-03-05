function getAllInstrumentInfo(){
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
        responses[3].json(),
        responses[4].json()
			]);
		})
		.then(function(results) {
      		var instrument = results[0][0];
      		var families = results[1];
      		var clefs = results[2];
          var sounds = results[3];
          var transposes = results[4];
          
          populateDropdown(families, 'dropdowns-family');
          populateDropdown(clefs, 'dropdowns-clefs');
          populateDropdown(sounds, 'dropdowns-sounds');
          populateDropdown(transposes, 'dropdowns-transposes');

      		setName(instrument);
      		setFamily(instrument);
      		setClef(instrument);
          setSounds(instrument);
          setTransposes(instrument);
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


function populateDropdown(options, element) {
  var element = document.getElementById(element);

  for(var option of options) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = option;

    element.appendChild(optionElement);
  }
}



getAllInstrumentInfo();