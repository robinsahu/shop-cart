import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  toggleCartHidden: () => dispach(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
//     0
//   ),
// }); // whenever reduce function updates it returns a new object and mapState props called everytime which decreases the performance because it rerenders entire state object. So we need to store it or cache called memoization for that we use reselect library

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
