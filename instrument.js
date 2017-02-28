function getInstrument() {
  var instrumentName = window.location.pathname.split('/')[3];

  fetch(`/api/search/?name=${instrumentName}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
      console.log(results);
    });
}

getInstrument();
