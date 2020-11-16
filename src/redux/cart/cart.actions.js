import CartActionTypes from './cart.types';

export const addItem = (item, quantity) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: {
		item,
		quantity,
	},
});
export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART,
});
