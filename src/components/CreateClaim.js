import axios from "axios";
import React, { useEffect, useState } from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const CreateClaim = ({ claimsAdded, setClaimsAdded }) => {
  const [title, setTitle] = React.useState("");
  const [creator, setCreator] = useState("");

  const addClaim = (e) => {
    e.preventDefault();
    console.log(title);
    post("/api/claims/create", {
      title: title,
      creator: creator,
    })
      .then(() => {
        setClaimsAdded(claimsAdded + 1);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  useEffect(() => {
    get("/api/verify")
      .then((results) => {
        console.log(results.data._id);
        setCreator(results.data._id);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <Box as="form" onSubmit={addClaim} width={["100%"]} py={4}>
      <Box>
        <div style={{ display: "flex" }}>
          <Input onChange={(e) => setTitle(e.target.value)} />
          <Button type="submit">Add</Button>
        </div>
      </Box>
    </Box>
  );
};

export default CreateClaim;
