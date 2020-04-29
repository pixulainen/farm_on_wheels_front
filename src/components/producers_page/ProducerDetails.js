import { useRouteMatch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProducerDisplayComponent from './ProducerDisplayComponent';
import ProductsCardList from './ProductsCardList';
export default function ProducerDetails(props) {
	const [ producer, setProducer ] = useState(null);
	const addToCart = props.addToCart;
	let match = useRouteMatch('/producers/:slug');
	useEffect(() => {
		const producerID = match.params.slug;
		const fetchData = async () => {
			const result = await axios(`http://localhost:3001/sellers/${producerID}`);
			setProducer(result.data);
		};
		fetchData();
	}, []);

	return producer ? (
		<div>
			<h1>
				<ProducerDisplayComponent producer={producer} />
				<ProductsCardList products={producer.products} addToCart={addToCart} />
			</h1>
		</div>
	) : null;
}
