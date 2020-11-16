export const addItemToCart = (cartItems, payload) => {
	let { item, quantity } = payload;
	quantity = parseInt(quantity, 10);

	const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

	if (existingCartItem) {
		return cartItems.map(
			(cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: (quantity += quantity) } : cartItem),
		);
	}

	return [ ...cartItems, { ...item, quantity } ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	return cartItems.filter((item) => item.id !== cartItemToRemove);
};
