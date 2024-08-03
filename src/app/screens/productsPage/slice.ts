import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageState } from "../../../lib/types/screen";
import ProductsPage from ".";


const initialState: ProductsPageState = {
  restaurant : null,
  chosenProduct: null,
  Products: []
}
const productsPageSlice = createSlice({
	name: "productsPage",
	initialState,
	reducers: {
		setRestaurant: (state, action) => {
			state.restaurant = action.payload;
		},
		setChosenProduct: (state, action) => {
			state.chosenProduct = action.payload;
		},
		setProducts: (state, action) => {
			state.Products = action.payload;
		},
	},
});

export const { setRestaurant, setChosenProduct, setProducts } = productsPageSlice.actions;
const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;