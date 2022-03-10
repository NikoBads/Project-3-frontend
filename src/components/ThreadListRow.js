import axios from "axios";
import React, { useEffect, useState } from "react";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";

import { Box, Card, Image, Heading, Text, Button } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

const ThreadListRow = ({ thread }) => {
  const navigate = useNavigate();

  const upVoteThread = () => {
    post(`/api/claims/upvote/claim/${thread._id}`);
    navigate("/");
  };

  const downVoteThread = () => {
    post(`/api/claims/downvote/claim/${thread._id}`);
    navigate("/");
  };

  const deleteThread = () => {
    post(`/delete/comment/${thread._id}`);
    navigate("/");
  };

  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Heading> {thread.title} </Heading>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            {localStorage.getItem("token") ? <Button>remove</Button> : <></>}
            <Text fontSize={0}>User: {thread.creator.name}</Text>
            <Text fontSize={0}>
              {new Date(thread.createdAt).toLocaleDateString("en-US", {
                timeZone: "UTC",
              })}
            </Text>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "3px",
          }}
        >
          <Box style={{ fontSize: "1.5em", padding: ".5em" }}>
            {thread.upVoted.length - thread.downVoted.length}
          </Box>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Button
              style={{ display: "flex", flexDirection: "column" }}
              onClick={upVoteThread}
            >
              👍
            </Button>
            <Button
              style={{ display: "flex", flexDirection: "column" }}
              onClick={downVoteThread}
            >
              👎
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ThreadListRow;
