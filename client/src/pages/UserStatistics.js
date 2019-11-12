import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMechanics } from "../api/fetchMechanics";
import Placeholder from "../components/User-page.js/Placeholder";

export default function UserStatistics({ games, text, buttonText }) {
  const [mechanics, setMechanics] = useState(null);
  useEffect(() => {
    getMechanics().then(mechanics => setMechanics(mechanics));
  }, []);
  console.log(mechanics);
  return (
    <Placeholder
      text="This page is under construction"
      buttonText="In Progress"
    />
  );
}
