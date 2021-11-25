import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispach) => ({
  toggleCartHidden: () => dispach(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
