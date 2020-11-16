import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
const INITIAL_STATE = {
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};

		default:
			return state;
	}
};

export default cartReducer;
