import { createSlice } from "@reduxjs/toolkit"; 
import  cartItem from "../../layout/CartItem";

const initialState = {
	cartItem: cartItem,
	amount: 9,
	total:0,
	isLoading: true,
}

const CartSlice = createSlice({
name:'cart',
initialState,
reducers : {
	clearCart: (state)=>{
   state.cartItems = [];
}},
}
 )
export const {clearCart} = CartSlice.actions
 
export default CartSlice.reducer