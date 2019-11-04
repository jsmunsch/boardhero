import React, { useState } from "react";
import styled from "styled-components";
import InputField from "./InputField";
import Form from "./Form";
import { Link } from "react-router-dom";
import { validateCredentials } from "../../api/fetchUser";
import { alert } from "../../animations/alert";

const FailMessage = styled.div`
  color: red;
`;
const LinkContainer = styled.div`
  fill: white;
  color: white;
  margin: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.brightEffect};
`;

let serverResponse = {};

export default function LoginForm() {
  const [failed, setFailed] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { email, password } = user;

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();

    validateCredentials(user)
      .then(response => response.json())
      .then(function(data) {
        if (data === "access denied") {
          setFailed(true);
          window.navigator.vibrate(400);
        } else {
          localStorage.setItem("user", data.name);
          window.location.pathname = "/Library/browse";
        }
      });
  }

  return (
    <>
      {failed && <FailMessage>Username or password incorrect</FailMessage>}
      <Form onSubmit={submit}>
        <InputField
          type="email"
          name="email"
          required
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <InputField
          placeholder="password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <InputField highlight type="submit" value="Login" />
      </Form>
      <LinkContainer>
        Don't have an Account ? <StyledLink to="/register">Sign Up</StyledLink>
      </LinkContainer>
    </>
  );
}
