import React, { useState } from "react";
import styled from "styled-components";
import Hero from "../icons/Hero";
import { useHistory } from "react-router-dom";
import { getUserData } from "../api/FetchUserData";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
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
const InputContainer = styled.input`
  padding: 10px;
  margin-top: 10px;
  font-size: 1.2em;
  width: inherit;
  border-radius: 2px;
  outline: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  border: none;
`;

const LoginButton = styled.button`
  width: inherit;
  background-color: ${props => props.theme.brightEffect};
  margin-top: 10px;
  height: 50px;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  font-size: 1.2em;
`;

export default function Login() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  React.useEffect(() => {
    getUserData().then(UserCredentials => {
      setData(UserCredentials);
    });
  }, []);
  data.find(validateUser);

  function validateUser(user) {
    const usernameTrue = user.user_id === username;
    const passwordTrue = user.password === password;
    if (usernameTrue && passwordTrue) {
      history.push("/Library/Collection");
    } else {
    }
  }

  return (
    <>
      <Headline>Boardhero</Headline>
      <VectorContainer>
        <Hero />
      </VectorContainer>
      <FlexForm
        onSubmit={() => {
          validateUser();
        }}
      >
        <InputContainer
          placeholder="Username"
          required
          onChange={event => setUsername(event.target.value)}
        />
        <InputContainer
          placeholder="password"
          type="password"
          required
          onChange={event => setPassword(event.target.value)}
        />
        <LoginButton>Login</LoginButton>
      </FlexForm>
    </>
  );
}
