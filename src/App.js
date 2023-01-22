import React from "react";
import "./App.css";
// import { Switch } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Homepage from "./pages/homepage/homepage.componenet";
import ShopPage from "./pages/shop/shop.component";
import Header from "./Components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/signin-signup/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";

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
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop-cart" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser,
// });

const mapDispatchToProps = (dispach) => ({
  setCurrentUser: (user) => dispach(setCurrentUser(user)),
});

//dispatch basically disapaches action object

export default connect(mapStateToProps, mapDispatchToProps)(App);
