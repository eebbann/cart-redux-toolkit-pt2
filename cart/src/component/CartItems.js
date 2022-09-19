 import React from "react";
 import { removeItem, increaseItem, decreaseItem } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";


 function CartItems({id,title,img,price,amount}) {
	const dispatch = useDispatch()
	 return <div className="container">
		<section className="product">
       <div className="product_detail">
        <img className="product_img" src={img} alt={title}/>
			  <div className="product_list">
					<h4>{title}</h4>
					<span>${price}</span>
					<button className="amt_btn" onClick={()=> {
						dispatch(removeItem({id}))
						}}>remove</button>
				</div>
				
			 </div>
			 <div className="prod_action">
           <span className="action" onClick={()=>dispatch(increaseItem(id))}>+</span>
					 <p>{amount}</p>
					<span className="action" >-</span>
			 </div>

		</section>
		</div>;
 }
 
 export default CartItems;
 