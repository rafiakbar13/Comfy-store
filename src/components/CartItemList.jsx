import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItemList;
