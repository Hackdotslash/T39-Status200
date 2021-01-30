import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../../DataLayer/reducer";
import { useStateValue } from "../../DataLayer/StateProvider";
import { auth, provider } from "../../firebase";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();
  const googleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div classname="login">
      <Button
        onClick={() => googleAuth()}
        variant="contained"
        color="secondary"
      >
        Login With Google
      </Button>
    </div>
  );
}

export default Login;
