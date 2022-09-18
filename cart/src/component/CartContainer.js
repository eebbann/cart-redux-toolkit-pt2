import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

function CartContainer() {
	const { cartItem, amount, total, loading } = useSelector( 
		(store) => store.cart 
	); 
	if (amount < 1) {
		return <section className="cart-sec">
			<header className="cart-header">
				<h2>Your Bag</h2>
				<h4 className="cart-empty">is currently empty</h4>
			</header>
		</section>
	} else { 
		return <div>
			{cartItem.map((item)=>{
				// console.log('k', cartItem)
				return   <CartItems key={item.id} {...item} />
			})}
		</div>;
	}
}
export default CartContainer;
