import React from "react";
import { useSelector } from "react-redux";

function CartContainer() {
	const { CartItem, amount, total, loading } = useSelector(
		(store) => store.cart
	);

	if (amount < 1) {
		return <section className="cart">
			<header className="cart-header">
				<h2>Your Bag</h2>
				<h4 className="cart-empty">is currently empty</h4>
			</header>
		</section>
	} else { 
		return <div>CartContainer</div>;
	}
}
export default CartContainer;
