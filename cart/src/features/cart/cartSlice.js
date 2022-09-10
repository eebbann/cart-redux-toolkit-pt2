import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems:[],
   total:0,
	 amount:0,
	 isLoading:true,
};

const cartSlice = createSlice( {
	initialState,
	 name : 'cart'
	})

export default cartSlice.reducer;
 