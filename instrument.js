function getInstrument() {
  var instrumentName = window.location.pathname.split('/')[3];

  fetch(`/api/search/?name=${instrumentName}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
    	updateResults(results);
      console.log(results);
    });
}

function updateResults(results) {
  var resultsList = document.getElementById('edit-instrument-form');
    
  for (var result of results) {
    var listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3> ${ result.name } </h3>
      <h5> Family : ${ result.family } </h5>
      <h5> Pitch : ${ result.pitch } </h5>
      <h5> Sounds at : ${ result.sounds } </h5>
      <h5> Transposes : ${ result.transposes } </h5>
      <h5> Reads ${ result.clef } Clef </h5>

    `;

    resultsList.appendChild(listItem);
  }
}

getInstrument();
