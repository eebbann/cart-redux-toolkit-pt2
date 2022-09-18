 import React from "react";
 
 function CartItems({id,title,img,price,amount}) {
	 return <div className="container">
		<section className="product">
       <div className="product_detail">
        <img className="product_img" src={img} alt={title}/>
			  <div className="product_list">
					<h4>{title}</h4>
					<span>${price}</span>
				</div>
			 </div>
			 <div>

			 </div>

		</section>
		</div>;
 }
 
 export default CartItems;
 