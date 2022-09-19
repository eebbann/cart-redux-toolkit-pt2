import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../feature/cart/cartSlice";
import CartItems from "./CartItems";

function CartContainer() {
	const dispatch = useDispatch();
	const { cartItem, amount, total, loading } = useSelector(
		(store) => store.cart
		
	);

	if (amount < 1) {
		return (
			<section className="cart-sec">
				<header className="cart-header">
					<h2>Your Bag</h2>
					<h4 className="cart-empty">is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<div className="container">
			<header className="cart-header">
        <h2>Your Bag</h2>
      </header>

			{cartItem.map((item) => {
				// console.log('k', cartItem)
				return <CartItems key={item.id} {...item} />;
			})}
			<footer>
				<div className="cart-total">
					<h4>Total</h4>${total}
				</div>
				<button
					className="btn btn-primary"
					onClick={() => dispatch(clearCart())}
				>
					Clear Cart{" "}
				</button>
			</footer>
		</div>
	);
}
export default CartContainer;
