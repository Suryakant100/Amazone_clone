import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const Register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        // console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="Amazone_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button onClick={signIn} className="signup_btn" type="submit">
            Sign In
          </button>
        </form>
        <p className="login_condition">
          <input type="checkbox" />
          By continuing, you agree to Amazon'sConditions of Use andPrivacy
          Notice.
        </p>
        {/* <p>Forget password?</p> */}
        {/* <p style={{ marginBottom: "15px" }}>Other issues with Sign-In</p> */}
        <button onClick={Register} className="register_btn">
          Create Amazone Account
        </button>
      </div>
    </div>
  );
};

export default Login;
