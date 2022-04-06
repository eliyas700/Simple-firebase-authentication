import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
function App() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    console.log("working");
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(error);
        // ...
      });
  };

  const signOutUSer = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="App">
      {user.email ? (
        <button onClick={signOutUSer}>Sign Out</button>
      ) : (
        <button onClick={googleSignIn}>Google Sign In</button>
      )}
      <h3>Name:{user.displayName}</h3>
      <p>Email:{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
