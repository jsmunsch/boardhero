import React from "react";
import { Formik } from "formik";
import EmailValidator from "email-validator";

export default function LoginStart() {
  return (
    { props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" placeholder="Enter your email" />

          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit" >
            Login
          </button>
        </form>
      );
    }}
  );
}
