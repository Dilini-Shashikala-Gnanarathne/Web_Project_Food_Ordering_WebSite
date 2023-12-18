import firebase from 'firebase';

const firebaseConfig = {
	// Your Credentials
  apiKey: "AIzaSyA6mFV7hWBYfxrz4D8B_37Y5wsaU5UZvUM",

  authDomain: "genrx-31b39.firebaseapp.com",

  databaseURL: "https://genrx-31b39-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "genrx-31b39",

  storageBucket: "genrx-31b39.appspot.com",

  messagingSenderId: "1055795245281",

  appId: "1:1055795245281:web:9121e417bf4bedd6bf87a0",

  measurementId: "G-KVBF8EKSDG"



};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
