import React from "react";

import SignIn from "../../Components/signin/signin.component";
import SignUp from "../../Components/sign-up/sign-up.component";

import "./sign-in-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
