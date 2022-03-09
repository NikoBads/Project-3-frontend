import axios from "axios";
import React from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const navigate = useNavigate();

  const userSignup = (e) => {
    e.preventDefault();
    post("/api/signup", {
      email,
      password,
      name,
    })
      .then((results) => {
        localStorage.setItem("token", results.data.authToken);
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <Box as="form" onSubmit={userSignup} p={3}>
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
      <Box width={["100%"]} px={2}>
        <Label htmlFor="name">Username</Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          name="name"
          defaultValue="Username"
        />
      </Box>
      <Button color="gray" my={4} py={2} bg="navy" type="submit">
        Join the conversation!
      </Button>
    </Box>
  );
};

export default Signup;
