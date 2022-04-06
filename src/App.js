import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
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
        // ...
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={googleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
