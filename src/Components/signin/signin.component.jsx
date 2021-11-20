import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGmail } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    // console.log(this.state);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    // console.log(event.target);
    this.setState({ [name]: value }); //because of this we are able o use same function in both the element
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>

        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGmail} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
