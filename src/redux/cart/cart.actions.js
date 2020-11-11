import CartActionTypes from './cart.types';

export const addItem = (item, quantity) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: {
		item,
		quantity,
	},
});
