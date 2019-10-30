import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getUserData } from "../api/fetchUser";

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
  const { user, setUser } = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;
  React.useEffect(() => {
    getUserData().then(UserCredentials => {
      setUserData(UserCredentials);
    });
  }, []);
  userData.forEach(validateUser);

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
      <FlexForm onSubmit={validateUser}>
        <InputContainer
          placeholder="Username"
          type="text"
          name="name"
          value={name}
        />
        <InputContainer
          type="email"
          name="email"
          placeholder="email"
          value={email}
        />
        <InputContainer
          placeholder="password"
          type="password"
          required
          value={password}
        />
        <InputContainer type="submit" value="Sign Up">
          Login
        </InputContainer>
      </FlexForm>
    </>
  );
}
