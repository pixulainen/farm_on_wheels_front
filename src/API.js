// import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
const SIGN_UP_URL = `${BASE_URL}/buyers`;
const SIGN_UP_SELLER_URL = `${BASE_URL}/sellers`;

const buyerSignInUrl = `${BASE_URL}/buyer-sign-in`;
const sellerSignInUrl = `${BASE_URL}/seller-sign-in`;

const validateBuyerUrl = `${BASE_URL}/buyer-validate`;
const validateSellerUrl = `${BASE_URL}/seller-validate`;

const addSellerTofavouritesUrl = `${BASE_URL}/add_seller_to_favourite`;
const removeSellerFromofavourites = `${BASE_URL}/remove_seller_from_favourite`;
const get = (url, token) => {
	return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const validate = (token) => {
	return get(validateBuyerUrl, token).then((response) => response.json());
};
const validateSeller = (token) => {
	return get(validateSellerUrl, token).then((response) => response.json());
};

const post = (url, data) => {
	const configurationObject = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	return fetch(url, configurationObject);
};
const jsonify = (response) => response.json();

const fetchProducers = () => {
	return fetch(`${BASE_URL}/sellers`).then(jsonify);
};

const fetchProducts = () => {
	return fetch(`${BASE_URL}/products`).then(jsonify);
};
const PostOrder = (products, total) => {
	const configurationObject = {
		seller: products[0].seller_id,
		total: total,
		products: products,
	};
	debugger;
	fetch(`${BASE_URL}/orders`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify(configurationObject),
	});
};
const search = (query) => {
	const configurationObject = {
		query,
	};

	return fetch(`${BASE_URL}/products/search`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			// Authorization: localStorage.getItem('token')
		},
		body: JSON.stringify(configurationObject),
	}).then((r) => jsonify(r));
};
const addToFavourites = (sellerId) => {
	const configurationObject = {
		sellerId,
	};
	return fetch(`${addSellerTofavouritesUrl}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify(configurationObject),
	});
};
const removeFromFavourites = (sellerId) => {
	const configurationObject = {
		sellerId,
	};
	return fetch(`${removeSellerFromofavourites}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify(configurationObject),
	});
};
const signUp = (configurationObject) => {
	return post(SIGN_UP_URL, configurationObject).then((resp) => resp.json());
};
const signUpSeller = (configurationObject) => {
	return post(SIGN_UP_SELLER_URL, configurationObject).then((resp) => resp.json());
};
const buyerSignIn = (data) => {
	return post(buyerSignInUrl, data).then((response) => response.json());
};
const sellerSignIn = (data) => {
	return post(sellerSignInUrl, data).then((response) => response.json());
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
	removeFromFavourites,
	signUpSeller,
	sellerSignIn,
	validateSeller,
};
