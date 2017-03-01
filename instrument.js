

function getInstrument() {
  var instrumentName = window.location.pathname.split('/')[3];

  fetch(`/api/search/?name=${instrumentName}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
      setName(results[0]);
      setFamily(results[0]);
      console.log(results);
    });
}

function getAllFamilies(){
  fetch('/api/families')
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        populateAllFamilies(results);
      });
}




function setName (instrument){
	document.getElementById('instrument-name').value = instrument.name;
}

function setFamily(instrument){
	console.log(document.getElementById('dropdowns-family').value) = instrument.family;
}
function populateAllFamilies(results){
  var familyDropdown = document.getElementById('dropdowns-family');

  for (var result of results) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ result } </h5>`;


    familyDropdown.appendChild(optionElement);
  }
}


getInstrument();
getAllFamilies();