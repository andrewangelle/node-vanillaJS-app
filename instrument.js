function getInstrument(){
	var instrumentName = window.location.pathname.split('/')[3];

	Promise.all([
		fetch(`/api/search/?name=${instrumentName}`),
		fetch('/api/families'),
		fetch('/api/clefs')
	])
		.then(function(responses){
			return Promise.all([
				responses[0].json(),
				responses[1].json(),
				responses[2].json()
			]);
		})
		.then(function(results) {
      		var instrument = results[0][0];
      		var families = results[1];
      		var clefs = results[2];

      		populateAllFamilies(families);
      		populateAllClefs(clefs);
      		setName(instrument);
      		setFamily(instrument);
      		setClef(instrument);
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

function populateAllFamilies(families){
  var familyDropdown = document.getElementById('dropdowns-family');

  for (var family of families) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ family } </h5>`;


    familyDropdown.appendChild(optionElement);
  }
}

function populateAllClefs(results) {
  var clefDropdown = document.getElementById('dropdowns-clefs');

  for (var result of results) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ result } </h5>`;

    clefDropdown.appendChild(optionElement);
  }
}


getInstrument();