function getNameResults(){
  document.getElementById('instrument-name')
    .addEventListener('submit', function(event) {
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
          updateResults(results);
        });
    });
}


function getFamilyResults(){
  document.getElementById('instrument-family')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      var family = document.getElementById('instrument-family').value;

      /**
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


function getClefResults(){
  document.getElementById('instrument-clef')
    .addEventListener('submit', function(event) {
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
          console.log(results);
        });
    });
}


/**
 * For each result, create a new list item and populate the list item
 * with the name of the instrument, then inject it into the results ul
 */
function updateResults(results) {
  var resultsList = document.getElementById('results');
  resultsList.innerHTML = '';

  for (var result of results) {
    var listItem = document.createElement('li');
    listItem.innerHTML = result.name;

    resultsList.appendChild(listItem);
  }
}



getNameResults();
getFamilyResults();
getClefResults();