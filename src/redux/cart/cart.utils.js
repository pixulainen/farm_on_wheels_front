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
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map(
		(cartItem) =>
			cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
	);
};
