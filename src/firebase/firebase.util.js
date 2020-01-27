import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBlHIOv5NzAQk_2Hpjh2bnegL1RUsdhfRI',
  authDomain: 'react-ecommerce-4199c.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-4199c.firebaseio.com',
  projectId: 'react-ecommerce-4199c',
  storageBucket: 'react-ecommerce-4199c.appspot.com',
  messagingSenderId: '42337406569',
  appId: '1:42337406569:web:e7e42ae31f0d17816fdcf8'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
