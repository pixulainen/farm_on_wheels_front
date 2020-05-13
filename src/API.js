// import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
const SIGN_UP_URL = `${BASE_URL}/buyers`;
// const PRODUCERS_URL = `${BASE_URL}/sellers`;
// const BUYERS_URL = `${BASE_URL}/buyers`;
const buyerSignInUrl = `${BASE_URL}/buyer-sign-in`;
const validateBuyerUrl = `${BASE_URL}/buyer-validate`;
const addSellerTofavouritesUrl = `${BASE_URL}/add_seller_to_favourite`;
const removeSellerFromofavourites = `${BASE_URL}/remove_seller_from_favourite`;

const jsonify = (response) => response.json();

const fetchProducers = () => {
	return fetch(`${BASE_URL}/sellers`).then(jsonify);
};

// const fetchSingleProducer = async (producerId) => {
// 	const response = await fetch(`${PRODUCERS_URL}/${producerId}`);
// 	return jsonify(response);
// };
const fetchProducts = () => {
	return fetch(`${BASE_URL}/products`).then(jsonify);
};
const PostOrder = (products, username, total) => {
	const configurationObject = {
		seller: products[0].seller_id,
		total: total,
		username,
		products: products
	};
	fetch(`${BASE_URL}/orders`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token')
		},
		body: JSON.stringify(configurationObject)
	});
};
const search = (query) => {
	const configurationObject = {
		query
	};

	return fetch(`${BASE_URL}/products/search`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
			// Authorization: localStorage.getItem('token')
		},
		body: JSON.stringify(configurationObject)
	}).then((r) => jsonify(r));
};
const post = (url, data) => {
	const configurationObject = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	return fetch(url, configurationObject);
};
const addToFavourites = (sellerId) => {
	const configurationObject = {
		sellerId
	};
	return fetch(`${addSellerTofavouritesUrl}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token')
		},
		body: JSON.stringify(configurationObject)
	});
};
const removeFromFavourites = (sellerId) => {
	const configurationObject = {
		sellerId
	};
	return fetch(`${removeSellerFromofavourites}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token')
		},
		body: JSON.stringify(configurationObject)
	});
};
const signUp = (configurationObject) => {
	return post(SIGN_UP_URL, configurationObject).then((resp) => resp.json());
};
const get = (url, token) => {
	return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const validate = (token) => {
	return get(validateBuyerUrl, token).then((response) => response.json());
};

const buyerSignIn = (data) => {
	return post(buyerSignInUrl, data).then((response) => response.json());
};

export default {
	fetchProducers,
	buyerSignIn,
	validate,
	PostOrder,
	search,
	fetchProducts,
	signUp,
	addToFavourites,
	removeFromFavourites
};
