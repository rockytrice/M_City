import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { firebase } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = (props) => {
  return <Routes {...props} />;
};

const auth = getAuth(firebase);
onAuthStateChanged(auth, (user) => {
  // Check for user status
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
