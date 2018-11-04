import { Container } from "design-system";
import React from "react";

import SignupForm from "../SignupForm";

export default class SignupPage extends React.Component {
  public render () {
    return (
      <Container>
        <SignupForm />
      </Container>
    );
  }
}