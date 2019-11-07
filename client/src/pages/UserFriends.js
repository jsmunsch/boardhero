import React from "react";
import styled from "styled-components";
import Placeholder from "../components/User-page.js/Placeholder";

export default function UserFriends({ text, buttonText }) {
  return (
    <Placeholder
      text="Seems like you didn't add any of your friends so far. Let's start
  connecting each other!"
      buttonText="Add Friend"
    />
  );
}
