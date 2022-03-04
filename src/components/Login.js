import React from "react";
import { get, post } from "../http/service";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginUser = (e) => {
    e.preventDefault();
    post("/api/login", {
      email,
      password,
    })
      .then((results) => {
        console.log(results.data);
        console.log("You are logged in!!!", results.data);

        localStorage.setItem("token", results.data);

        // let thing = localStorage.getItem("token");
        // console.log("This was stored in our localStorage", thing);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const checkToken = () => {
    let thing = localStorage.getItem("token");
    console.log("This was stored in our localStorage", thing);
  };

  const checkIfLoggedIn = (e) => {
    e.preventDefault();
    get("/api/loggedIn")
      .then((results) => {
        console.log("Are you logged in?", results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    console.log("You have logged out");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
      <button onClick={checkIfLoggedIn}>See if you are logged in</button>
      <button onClick={checkToken}>check if token is stored</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Login;
