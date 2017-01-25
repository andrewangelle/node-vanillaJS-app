document.getElementById('instrument-form')
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
