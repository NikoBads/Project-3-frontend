import axios from "axios";
import React from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const SearchClaimsDB = () => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState("");

  const searchClaims = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${query}&key=${process.env.REACT_APP_KEY}`
      )
      .then((response) => {
        setResults(response.data.claims);
        console.log("Here is the response : ", response.data);
      })

      .catch((error) => {
        console.log("Something went wrong in googleAPI call! ", error.message);
      });
  };

  return (
    <Box>
      <Text style={{ fontSize: ".8em", textAlign: "left" }}>
        While information has helped people stay safe throughout these modern
        times, it has at times led to confusion. Conducting online research can
        be frustrating and many sources are unreliable. The United Nations has
        characterized this unprecedented spread of information as an
        "infodemic". It is important that your resources are well reasoned and
        based on strong evidence!
        <hr />
        This search tool allows you to browse through a database of fact-checked
        claims and see if what you've been reading online has been verified!
      </Text>
      <Box as="form" onSubmit={searchClaims} style={{ display: "flex" }}>
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button type="submit">Search</Button>
      </Box>
      <Box>
        {results &&
          results.map((claim) => (
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
              }}
            >
              <Heading> {claim.text} </Heading>
              <Text fontSize={0}>Claimant: {claim.claimant}</Text>
              <Text fontSize={0}>
                Validity: {claim.claimReview[0].textualRating}
              </Text>
              <a href={claim.claimReview[0].url} style={{ fontSize: ".8em" }}>
                Read More
              </a>
            </Card>
          ))}
      </Box>
    </Box>
  );
};

export default SearchClaimsDB;
