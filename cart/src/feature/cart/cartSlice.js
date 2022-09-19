import { createSlice } from "@reduxjs/toolkit";
import cartItem from "../../layout/CartItem";

const initialState = {
	cartItem: cartItem,
	amount: 2,
	total: 0,
	isLoading: true,
};

const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart: (state) => {
		 state.cartItem = []
		},
		removeItem: (state,  {payload}) => {
			state.cartItem = state.cartItem.filter(item => item.id !== payload.id)
			console.log(payload)
		},
		increaseItem: (state,{payload})=>{
			const cartItem = state.cartItem.find((item) => item.id === payload.id)
			cartItem.amount  = cartItem.amount + 1 ;
			console.log(payload)
		},
		decreaseItem: (state,{payload})=>{
			const cartItem = state.cartItem.find((item) => item.id === payload.id)
			cartItem.amount  = cartItem.amount - 1
			console.log(cartItem)
		}
	}
	
});

export const { clearCart, removeItem, increaseItem, decreaseItem } = CartSlice.actions;

export default CartSlice.reducer;
