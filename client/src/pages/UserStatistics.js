import React, { useState, useEffect } from "react";
import { getMechanics } from "../api/fetchMechanics";
import Placeholder from "../components/User-page.js/Placeholder";

export default function UserStatistics() {
  const [mechanics, setMechanics] = useState(null);
  useEffect(() => {
    getMechanics().then(mechanics => setMechanics(mechanics));
  }, []);
  console.log(mechanics);
  return <Placeholder text="This page is under construction" />;
}
