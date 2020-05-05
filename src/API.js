// import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
// const PRODUCERS_URL = `${BASE_URL}/sellers`;
// const BUYERS_URL = `${BASE_URL}/buyers`;
const buyerSignInUrl = `${BASE_URL}/buyer-sign-in`;
const validateBuyerUrl = `${BASE_URL}/buyer-validate`;

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
const PostOrder = (products, username) => {
	const configurationObject = {
		seller: products[0].seller_id,
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
const get = (url, token) => {
	return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url);
};

const validate = (token) => {
	return get(validateBuyerUrl, token).then((response) => response.json());
};

const buyerSignIn = (data) => {
	return post(buyerSignInUrl, data).then((response) => response.json());
};

export default { fetchProducers, buyerSignIn, validate, PostOrder, search, fetchProducts };
