import React from "react";
import {useSelector} from "react-redux"
import {Bag} from "react-bootstrap-icons"
function NavBar() {
const amount = useSelector((store)=>store.cart.amount);
return (
	<div className="main"> 
		<div className="header-main"> 
			<h3 className="h-head"> redux toolkit</h3>
		<div className="cart">
     <Bag color="white" size={26}/>
		 <p className="amount">{amount}</p>
		</div>
    </div> 
	</div> 
	)
}

export default NavBar;
