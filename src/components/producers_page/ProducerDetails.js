import { useRouteMatch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProducerDisplayComponent from './ProducerDisplayComponent';
import ProductsCardList from './ProductsCardList';
import { Container } from 'semantic-ui-react';

export default function ProducerDetails(props) {
	const [ producer, setProducer ] = useState(null);

	const addToCart = props.addToCart;

	let match = useRouteMatch('/producers/:slug');

	useEffect(
		() => {
			const producerID = match.params.slug;
			const fetchData = async () => {
				const result = await axios(`http://localhost:3001/sellers/${producerID}`);
				setProducer(result.data);
			};
			fetchData();
		},
		[ match ],
	);

	return producer ? (
		<Container style={{ width: 1500, padding: 10 }}>
			<ProducerDisplayComponent producer={producer} />
			<Container>
				<ProductsCardList products={producer.products} addToCart={addToCart} />
			</Container>
		</Container>
	) : null;
}
