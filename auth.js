var config = {
  apiKey: "AIzaSyC6gyO9HoGN0yIAxlgCVAMyIObfy-NQXkE",
  authDomain: "test-andy-65901.firebaseapp.com"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (!user || (user.email !== 'andrewangelle@gmail.com' && user.email !== 'zaknotzak@gmail.com')) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
});

