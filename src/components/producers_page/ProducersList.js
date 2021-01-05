import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProducerCard from './ProducerCard';

const ProducersList = ({ producers }) => {
	const renderProducers = producers.map((producer) => {
		return <ProducerCard producer={producer} key={producer.id} />;
	});
	return (
		<Container style={{ marginTop: 75, padding: 10 }}>
			<Card.Group itemsPerRow='3'>{renderProducers}</Card.Group>
		</Container>
	);
};
export default ProducersList;
