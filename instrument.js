function getAllInstrumentInfo(){
	var instrumentId = window.location.pathname.split('/')[3];

	Promise.all([
		fetch(`/api/search/?id=${instrumentId}`),
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

      		setId(instrument);
      		setName(instrument);
      		setFamily(instrument);
      		setClef(instrument);
          setSounds(instrument);
          setTransposes(instrument);
    });
}

function setId (instrument){
	document.getElementById('instrument-id').value = instrument.id;
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

//Get ahold of values set on forms
function updateChanges(event){
  var editInstrumentForm = document.getElementById('edit-instrument-form');

  editInstrumentForm.addEventListener('submit', function(event){
    event.preventDefault();

    var id = document.getElementById('instrument-id').value;
    var name = document.getElementById('instrument-name').value;
    var family = document.getElementById('dropdowns-family').value;
    var clef = document.getElementById('dropdowns-clefs').value;
    var sounds = document.getElementById('dropdowns-sounds').value;
    var transposes = document.getElementById('dropdowns-transposes').value;

    console.log(id);
    console.log(name);
    console.log(family);
    console.log(clef);
    console.log(sounds);
    console.log(transposes);

    fetch(`/api/instrument/update?id=${id}&name=${name}&family=${family}&clef=${clef}&sounds=${sounds}&transposes=${transposes}`)
      .then(function() {
        console.log('updated');
      });
  })

}

function deleteInstrument(){
  var deleteButton = document.getElementById('delete-button');

  deleteButton.addEventListener('click', function(ev){

    var id = document.getElementById('instrument-id').value;
    console.log(id);

    fetch(`/api/instrument/delete/?id=${id}`)
      .then(function() {
        console.log('deleted');
      });
  })
}

updateChanges();
getAllInstrumentInfo();
deleteInstrument();