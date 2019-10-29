import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { fetchUser, createUser } from "../api/fetchUser";
const { ObjectID } = require("mongodb");

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
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

export default function LoginForm() {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [existingUser, setExistingUser] = useState([]);
  const popel = {
    name: username,
    password: password
  };
  React.useEffect(() => {
    fetchUser().then(UserCredentials => {
      setExistingUser(UserCredentials);
    });
  }, []);
  console.log(popel);
  console.log(existingUser);

  async function addUserToDatabase() {
    createUser(popel);
  }
  return (
    <>
      <FlexForm>
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
        <LoginButton onClick={() => addUserToDatabase(popel)}>
          Login
        </LoginButton>
      </FlexForm>
    </>
  );
}
