//API Calls-----------------------------------------------------------
//--------------------------------------------------------------------

function multiFieldSearch(){
  var instrumentForm = document.getElementById('instrument-form');


  instrumentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('instrument-name').value;
    var family = document.getElementById('dropdowns-family').value;
    var clef = document.getElementById('dropdowns-clefs').value;
    var url = '?';

    if(name) {
      var newURL = `name=${name}`;
      url = url+newURL;
      console.log(url);
    }
    if(family){
      var newURL = `family=${family}`;
      url = url+newURL;
      console.log(url);
    }
    if(clef){
      var newURL = `&clef=${clef}`;
      url = url+newURL;
      console.log(url);
    }


    /**
     * Fetch JSON data from family API
     * Convert JSON to JS object
     * Update results list
     */
    fetch('/api/search'+url)
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        updateResults(results);
      });
  });
}


function showAllFamilies() {
    /**
     * Fetch JSON data from API
     * Convert JSON to JS object
     * Update dropdown list
     */
  fetch('/api/families')
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        populateFamilyDropdown(results);
      });
}

function showAllClefs() {
    /**
     * Fetch JSON data from API
     * Convert JSON to JS object
     * Update dropdown list
     */
  fetch('/api/clefs')
      .then(function(response) {
        return response.json();
      })
      .then(function(results) {
        populateClefDropdown(results);
      });  
}






//Doing stuff with the results.------------------------------------------------------
//--------------------------------------------------------------------
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

function populateFamilyDropdown(results) {
  var familyDropdown = document.getElementById('dropdowns-family');

  clearResults();

  for (var result of results) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = `<h5> ${ result } </h5>`;


    familyDropdown.appendChild(optionElement);
  }
}

function populateClefDropdown(results) {
  var clefDropdown = document.getElementById('dropdowns-clefs');

  clearResults();

  for (var result of results) {
    var optionElement = document.createElement('option');
    optionElement.innerHTML = result;


    clefDropdown.appendChild(optionElement);
  }
}
















multiFieldSearch();
showAllFamilies();
showAllClefs();