import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Auth/Login';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {firebaseConfig,app} from './firebaseConfig';
import React from "react";


// Initialize Firebase


export default function App() {
//   console.log("firebase==config",firebaseConfig)
//   // const app = initializeApp(firebaseConfig);
//   // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app)


// React.useEffect(()=>{
//   console.log("useEffwect Calledss")
// signUp()
// },[])


// const signUp=()=>{
//   createUserWithEmailAndPassword(auth, "email@gmail.com", "password123")
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user,"user===-")
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//     console.log("error in firebase user auth ",error)
//   });
// }




  return (
    // <EvaConfig>
     <Login/>
    //  </EvaConfig>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});