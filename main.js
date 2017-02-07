function showInstrumentByName(){
  var instrumentForm = document.getElementById('instrument-form');

  instrumentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('instrument-name').value;

    /**
     * Fetch JSON data from family API
     * Convert JSON to JS object
     * Update results list
     */
    fetch('/api/instruments/' + name)
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        updateNameResults(results);
      });
  });
}

function showInstrumentByFamily(){
  var instrumentForm = document.getElementById('instrument-form');

  instrumentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var family = document.getElementById('instrument-family').value;

    /*
     * Fetch JSON data from family API
     * Convert JSON to JS object
     * Update results list
     */
    fetch('/api/family/' + family)
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        updateResults(results);
      });
  });
}

function showInstrumentByClef(){
  var instrumentForm = document.getElementById('instrument-form');

  instrumentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var clef = document.getElementById('instrument-clef').value;

    /**
     * Fetch JSON data from family API
     * Convert JSON to JS object
     * Update results list
     */
    fetch('/api/clef/' + clef)
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        updateResults(results);
      });
  });
}

function clearResults(){
  var resultsList = document.getElementById('results');
  resultsList.innerHTML = '';
}






/**
 * For each result, create a new list item and populate the list item
 * with the name of the instrument, then inject it into the results ul
 */
function updateResults(results) {
  var resultsList = document.getElementById('results');
    
  clearResults();

  for (var result of results) {
    var listItem = document.createElement('li');
    listItem.innerHTML = result.name;

    resultsList.appendChild(listItem);
  }
}

function updateNameResults(results) {
  var resultsList = document.getElementById('results');
    
  clearResults();

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












  /*
  *Create dropdown menu to select from all possible family options
  */
function displayDropdowns(){
    var familyButton = document.getElementById('dropdowns family');
    familyButton.innerHTML = `
    <br>
    <label for="dropdowns">Show All: </label>
      <select name="Families">
        <option value="label">Families</option>
        <option value="Strings">Strings</option>
        <option value="Brass">Brass</option>
        <option value="Woodwinds">Woodinds</option>
        <option value="Percussion">Percussion</option>
      </select>

      <select name="Clefs">
        <option value="Clefs">Clefs</option>
        <option value="Treble">Treble</option>
        <option value="Bass">Bass</option>
        <option value="Alto">Alto</option>
        <option value="Grand Staff">Grand Staff</option>
      </select>
    `;
}


showInstrumentByName();
showInstrumentByFamily();
showInstrumentByClef();

displayDropdowns();
