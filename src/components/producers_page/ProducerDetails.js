import { useRouteMatch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProducerDisplayComponent from './ProducerDisplayComponent';
import ProductsCardList from './ProductsCardList';
import { Container } from 'semantic-ui-react';

export default function ProducerDetails(props) {
	const [ producer, setProducer ] = useState(null);
	const [ didMount, setDidMount ] = useState(false);
	let match = useRouteMatch('/producers/:slug');
	const producerID = match.params.slug;
	useEffect(
		() => {
			const fetchData = async () => {
				const result = await axios(`http://localhost:3001/sellers/${producerID}`);
				setProducer(result.data);
				setDidMount(true);
			};
			fetchData();
		},
		[ producerID ],
	);
	if (!didMount) {
		return null;
	}
	return producer ? (
		<Container style={{ width: 1500, padding: 10 }}>
			<ProducerDisplayComponent producer={producer} />
			<Container style={{ paddingTop: 10 }}>
				<ProductsCardList products={producer.products} />
			</Container>
		</Container>
	) : null;
}
