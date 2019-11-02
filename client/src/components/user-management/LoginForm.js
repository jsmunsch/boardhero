import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import InputField from "./InputField";
import Form from "./Form";
import { Link } from "react-router-dom";
import { validateCredentials } from "../../api/fetchUser";

const LinkContainer = styled.div`
  fill: white;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.brightEffect};
`;
export default function LoginForm() {
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
    console.log({ email, password });
    validateCredentials(user);
  }

  return (
    <>
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
