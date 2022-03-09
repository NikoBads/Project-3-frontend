import React from "react";
import { get, post } from "../http/service";
import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    post("/api/login", {
      email,
      password,
    })
      .then((results) => {
        console.log(results.data);
        console.log("You are logged in!!!", results.data.authToken);

        localStorage.setItem("token", results.data.authToken);
        navigate("/");

        let thing = localStorage.getItem("token");
        console.log("This was stored in our localStorage", thing);
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
    <Box as="form" onSubmit={loginUser} p={3}>
      <Box width={["100%"]} px={2}>
        <Label htmlFor="name">E-mail adress</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          defaultValue="E-mail"
        />
      </Box>
      <Box width={["100%"]} px={2}>
        <Label htmlFor="name">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          defaultValue="Password"
        />
      </Box>
      <Button color="gray" my={4} py={2} type="submit">
        Log in
      </Button>
    </Box>
    // <Box>
    //   <Heading>Login</Heading>
    //   <form onSubmit={loginUser}>
    //     <input value={email} onChange={(e) => setEmail(e.target.value)} />
    //     <input value={password} onChange={(e) => setPassword(e.target.value)} />
    //     <button type="submit">Log in</button>
    //   </form>
    //   <button onClick={checkIfLoggedIn}>See if you are logged in</button>
    //   <button onClick={checkToken}>check if token is stored</button>
    //   <button onClick={logout}>Log Out</button>
    // </Box>
  );
};

export default Login;
