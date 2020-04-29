const BASE_URL = 'http://localhost:3001';
const PRODUCERS_URL = `${BASE_URL}/sellers`;
const BUYERS_URL = `${BASE_URL}/buyers`;
const buyerSignInUrl = `${BASE_URL}/buyer-sign-in`;
const validateBuyerUrl = `${BASE_URL}/buyer-validate`;

const jsonify = (response) => response.json();

const fetchProducers = () => {
	return fetch(`${BASE_URL}/sellers`).then(jsonify);
};

const fetchSingleProducer = async (producerId) => {
	const response = await fetch(`${PRODUCERS_URL}/${producerId}`);
	return jsonify(response);
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
const PostOrder = (configurationObject) => {
	fetch(`${BASE_URL}/orders`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(configurationObject)
	});
	// 	ORunning via Spring preloader in process 75548
	// Loading development environment (Rails 6.0.2.2)
	// r2.6.1 :001 > OrderProduct.new
	//  => #<OrderProduct id: nil, order_id: nil, product_id: nil, total: nil, created_at: nil, updated_at: nil>
	// 2.6.1 :002 > Order.new
	//  => #<Order id: nil, seller_id: nil, buyer_id: nil, created_at: nil, updated_at: nil>
	// 2.6.1 :003 >
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

export default { fetchProducers, buyerSignIn, validate, PostOrder };
