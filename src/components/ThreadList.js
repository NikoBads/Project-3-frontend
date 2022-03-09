import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get, post } from "../http/service";
import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import ThreadListRow from "./ThreadListRow";

const ThreadList = ({ claimsAdded }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get("/api/claims")
      .then((results) => {
        setData(results.data.claimsArr);
      })
      .catch((err) => {
        console.error("something went wrong! ", err.message);
      });
  }, [claimsAdded]);

  return (
    <Box>
      {data.map((thread) => (
        <ThreadListRow thread={thread} />
      ))}
    </Box>
  );
};

export default ThreadList;
