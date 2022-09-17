import { createSlice } from "@reduxjs/toolkit"; 
import  CartItem from "../../layout/CartItem"
const initialState = {
	cartItems: CartItem,
	amount: 21,
	total:0,
	isLoading: true,
}

const CartSlice = createSlice({
name:'cart',
initialState
}
 )
 console.log(CartSlice)
 
export default CartSlice.reducer