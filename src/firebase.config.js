import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAfSfgCcSElp7WIO0DIRY9FgRTrsJMyfLU",
    authDomain: "restaurant-app-4231a.firebaseapp.com",
    databaseURL: "https://restaurant-app-4231a-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-4231a",
    storageBucket: "restaurant-app-4231a.appspot.com",
    messagingSenderId: "858001306241",
    appId: "1:858001306241:web:78cd30ddf018fdf9ff1380"
  };

  const app = getApps.length >0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};