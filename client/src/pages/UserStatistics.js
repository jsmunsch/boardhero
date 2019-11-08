import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getMechanics } from "../api/fetchMechanics";

export default function UserStatistics({ games }) {
  const [mechanics, setMechanics] = useState(null);
  useEffect(() => {
    getMechanics().then(mechanics => setMechanics(mechanics));
  }, []);
  console.log(mechanics);
  return <h1>hi</h1>;
}
