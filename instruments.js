function getAllInstruments() {
  fetch('/api/search')
    .then(function(response) {
      return response.json();
    })
    .then(function(instruments) {
      updateInstruments(instruments);
    });
}

function updateInstruments(instruments) {
  var instrumentsList = document.getElementById('instrument-list');

  for (var instrument of instruments) {
    var listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="instrument/${instrument.name}">${ instrument.name }</a>
    `;

    instrumentsList.appendChild(listItem);
  }
}

getAllInstruments();
