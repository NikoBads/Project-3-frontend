import axios from "axios";
import React, { useEffect, useState } from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const ThreadListRow = ({ thread }) => {
  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
    >
      <Heading> {thread.title} </Heading>
      <Box d="flex">
        <Text fontSize={0}>User: {thread.creator.name}</Text>
        <Text fontSize={0}> {thread.createdAt}</Text>
      </Box>
    </Card>
  );
};

export default ThreadListRow;
