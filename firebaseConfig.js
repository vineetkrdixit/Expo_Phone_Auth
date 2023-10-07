// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export default firebaseConfig= {
//     apiKey: "AIzaSyCJMOD3jDJC_wgjIbDR6m8ALzg-fh07ldQ",
//     authDomain: "chatapp-9e6d8.firebaseapp.com",
//     projectId: "chatapp-9e6d8",
//     storageBucket: "chatapp-9e6d8.appspot.com",
//     messagingSenderId: "533049743026",
//     appId: "1:533049743026:android:bfbf00e59559f2a8685bab",
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyCJMOD3jDJC_wgjIbDR6m8ALzg-fh07ldQ",
    authDomain: "chatapp-9e6d8.firebaseapp.com",
    projectId: "chatapp-9e6d8",
    storageBucket: "chatapp-9e6d8.appspot.com",
    messagingSenderId: "533049743026",
    appId: "1:533049743026:android:bfbf00e59559f2a8685bab",
  };
  
  export default app = initializeApp(firebaseConfig);