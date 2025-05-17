import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA2r7xbuglmWY90aKaZR3h3VcON1kbBa8Y',
  authDomain: 'teste-23d05.firebaseapp.com',
  projectId: 'teste-23d05',
  storageBucket: 'teste-23d05.firebasestorage.app',
  messagingSenderId: '829193132512',
  appId: '1:829193132512:web:9f97e659570b559f183385',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
