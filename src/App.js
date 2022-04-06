import "./App.css";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
function App() {
  const googleSignIn = () => {
    console.log("Working");
  };
  return (
    <div className="App">
      <button onClick={googleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
