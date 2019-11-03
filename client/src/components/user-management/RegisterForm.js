import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import InputField from "./InputField";
import Form from "./Form";
import { Link } from "react-router-dom";
import { createUser } from "../../api/fetchUser";

const LinkContainer = styled.div`
  fill: white;
  color: white;
  margin: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.brightEffect};
`;

export default function RegisterForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = user;

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    if (password !== password2) {
      console.log("passwords don't match");
    } else {
      console.log({ name, email, password });
      createUser(user);
    }
  }
  return (
    <>
      <Form onSubmit={submit}>
        <InputField
          placeholder="name"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
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
        <InputField
          placeholder="confirm password"
          type="password"
          name="password2"
          required
          value={password2}
          onChange={handleChange}
        />
        <InputField highlight type="submit" value="Sign Up" />
      </Form>
      <LinkContainer>
        Already have an Account ? <StyledLink to="/">Login</StyledLink>
      </LinkContainer>
    </>
  );
}
