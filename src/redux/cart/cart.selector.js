import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //it is an input selector it will return cart object from main state object(state is basically rootreducer object)

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
); //createSeector takes two argument first collection of input Selector in array  and second function from which we need the output

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
