import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.component";
import Header from "./Components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-signup/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unSubscribeFromOauth = null;

  // componentDidMount() {
  //   this.unSubscribeFromOauth = auth.onAuthStateChanged((user) => {
  //     //this is a pretty good method that fetch or gets aware if someone sigin or sign out
  //     this.setState({ currentUser: user });
  //     // console.log(user); //if we refresh we get user again in console as it knows that user still signed in
  //   });
  // }
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          // console.log(this.state);
        });
      }

      // this.setState({ currentUser: userAuth });
      // console.log(this.state.currentUser);
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromOauth();
  }

  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispach) => ({
  setCurrentUser: (user) => dispach(setCurrentUser(user)),
});

//dispatch basically disapaches action object

export default connect(mapStateToProps, mapDispatchToProps)(App);
