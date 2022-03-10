import React, { useState } from "react";
import { get, post } from "../http/service";
import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { useNavigate } from "react-router-dom";

import ThreadList from "./ThreadList";
import SearchClaimsDB from "./SearchClaimsDB";
import CreateClaim from "./CreateClaim";

const Home = () => {
  const [claimsAdded, setClaimsAdded] = useState(0);

  return (
    <div>
      <div>
        <Heading
          style={{ fontSize: "2em", padding: "3px", fontFamily: "helvetica" }}
        >
          project-fact-check
        </Heading>
      </div>
      <div>
        <a
          className="button-links"
          href="https://en.wikipedia.org/wiki/Wikipedia:Reliable_sources"
        >
          Wikipedia:ReliableSources
        </a>
        <a className="button-links" href="https://news.google.com">
          Google News
        </a>
        <a
          className="button-links"
          href="https://en.wikipedia.org/wiki/List_of_fact-checking_websites#United_States"
        >
          List of fact-checking websites in the US
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box width={"40%"} p="2" m="2">
          <CreateClaim
            setClaimsAdded={setClaimsAdded}
            claimsAdded={claimsAdded}
          />
          <ThreadList claimsAdded={claimsAdded} />
        </Box>
        <Box width={"40%"} p="2" my="4">
          <SearchClaimsDB />
        </Box>
      </div>
    </div>
  );
};

export default Home;
