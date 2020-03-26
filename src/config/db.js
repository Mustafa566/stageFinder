import Firebase from 'firebase'

 let config = {
    apiKey: "AIzaSyAVak4jiGsGBqmZ-2tTVVkUdxHhIUMSUhU",
    authDomain: "stagefinder-70be9.firebaseapp.com",
    databaseURL: "https://stagefinder-70be9.firebaseio.com",
    projectId: "stagefinder-70be9",
    storageBucket: "stagefinder-70be9.appspot.com",
    messagingSenderId: "700669258125",
    appId: "1:700669258125:web:24ed2acf09703f2c0175c4",
    measurementId: "G-KRSS8BJVBT"
  };
let app = Firebase.initializeApp(config)


export const db = app.database()