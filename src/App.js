import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-signup/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromOauth = null;

  componentDidMount() {
    this.unSubscribeFromOauth = auth.onAuthStateChanged((user) => {
      //this is a pretty good method that fetch or gets aware if someone sigin or sign out
      this.setState({ currentUser: user });
      // console.log(user); //if we refresh we get user again in console as it knows that user still signed in
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromOauth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
