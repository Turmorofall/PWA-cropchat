import firebase from 'firebase';

let config = {
	apiKey: "XXX",
	authDomain: "XXX",
	databaseURL: "XXX",
	projectId: "XXX",
	storageBucket: "XXX",
	messagingSenderId: "XXX"
};
firebase.initializeApp(config);

export default {
	database: firebase.database()
}