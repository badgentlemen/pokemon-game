import FirebaseApp from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCBCrj-5xkrbJ72lkyknF4j_7kSkB-PDOg",
    authDomain: "pokemon-game-3c4b0.firebaseapp.com",
    databaseURL: "https://pokemon-game-3c4b0-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-3c4b0",
    storageBucket: "pokemon-game-3c4b0.appspot.com",
    messagingSenderId: "78008855900",
    appId: "1:78008855900:web:6134744eb2268badeca599"
};

FirebaseApp.initializeApp(firebaseConfig);

export const App = FirebaseApp;
export const Database = FirebaseApp.database();