import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDXB8WpzH2N0vrM7_toSQFPL3kQHGkxzqs',
	authDomain: 'crwn-db-8f0fa.firebaseapp.com',
	databaseURL: 'https://crwn-db-8f0fa.firebaseio.com',
	projectId: 'crwn-db-8f0fa',
	storageBucket: 'crwn-db-8f0fa.appspot.com',
	messagingSenderId: '723784510556',
	appId: '1:723784510556:web:6433073edbe66640f10a99',
	measurementId: 'G-DJVCFFQNWB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
