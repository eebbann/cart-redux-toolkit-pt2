import { useSelector } from "@reduxjs/toolkit";
import { Bag } from "react-bootstrap-icons";

function Navbar() {
	return (
		<div className="nav-center">
			<h3>Redux toolkit</h3>
			<div className="container">
				<Bag color="white" size={26}/>
				<div className="amount-container">
					<p className="amount">0</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
