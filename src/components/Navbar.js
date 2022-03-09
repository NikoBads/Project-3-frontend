import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { get, post } from "../http/service";
import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    console.log("You have logged out");
    navigate("/");
  };
  if (localStorage.getItem("token")) {
    return (
      <Box p={3} fontSize={4} color="white">
        <Button as={Link} color="gray" to="/">
          Home
        </Button>{" "}
        <Button as={Link} to="/" color="gray" onClick={logout}>
          Sign Out
        </Button>
      </Box>
    );
  } else {
    return (
      <Box p={3} fontSize={4} color="white">
        <Button as={Link} color="gray" to="/">
          Home
        </Button>{" "}
        <Button as={Link} color="gray" to="/signup">
          Signup
        </Button>
        <Button as={Link} color="gray" to="/login">
          Log In!
        </Button>
      </Box>
    );
  }
  // <Box p={3} fontSize={4} color="white">
  //   <Button as={Link} color="gray" to="/">
  //     Home
  //   </Button>
  //   <Button as={Link} color="gray" to="/signup">
  //     Signup
  //   </Button>
  //   <Button as={Link} color="gray" to="/login">
  //     Log In!
  //   </Button>
  //   <Button as={Link} to="/" color="gray" onClick={logout}>
  //     Sign Out
  //   </Button>
  // </Box>
  //   );
};

export default Navbar;
