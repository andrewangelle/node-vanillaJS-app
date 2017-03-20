function getAllInstrumentInfo(){
	Promise.all([
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
      		var families = results[0];
      		var clefs = results[1];
          var sounds = results[2];
          var transposes = results[3];
          
          populateDropdown(families, 'dropdowns-family');
          populateDropdown(clefs, 'dropdowns-clefs');
          populateDropdown(sounds, 'dropdowns-sounds');
          populateDropdown(transposes, 'dropdowns-transposes');
    });
}

function populateDropdown(options, element) {
  var element = document.getElementById(element);

  for(var option of options) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = option;

    element.appendChild(optionElement);
  }
}

function redirectToAdminPage() {
  window.location.href = "/admin/instruments";
}

function updateChanges(event){
  var editInstrumentForm = document.getElementById('edit-instrument-form');

  editInstrumentForm.addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('instrument-name').value;
    var family = document.getElementById('dropdowns-family').value;
    var clef = document.getElementById('dropdowns-clefs').value;
    var sounds = document.getElementById('dropdowns-sounds').value;
    var transposes = document.getElementById('dropdowns-transposes').value;

    console.log(name);
    console.log(family);
    console.log(clef);
    console.log(sounds);
    console.log(transposes);

    fetch(`/api/instrument/create?name=${name}&family=${family}&clef=${clef}&sounds=${sounds}&transposes=${transposes}`)
      .then(function() {

        redirectToAdminPage();
        console.log('created');
      });
  })

}

updateChanges();
getAllInstrumentInfo();
