import React from "react";
import styled from "styled-components";
import Hero from "../icons/Hero";
import RegisterForm from "../components/user-management/RegisterForm";
import { useUser } from "../hooks";

const FlexContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VectorContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 5px;
  display: flex;
  justify-content: center;
`;

const Headline = styled.h1`
  text-align: center;
  color: white;
  font-size: 2.5em;
`;

export default function Register() {
  const [user] = useUser();
  console.log(user);

  return (
    <FlexContainer>
      <Headline>Boardhero {user}</Headline>
      <VectorContainer>
        <Hero />
      </VectorContainer>
      <RegisterForm />
    </FlexContainer>
  );
}
