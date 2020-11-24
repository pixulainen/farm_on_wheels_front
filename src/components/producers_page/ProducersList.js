import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProducerCard from './ProducerCard';

const ProducersList = ({ producers }) => {
	const renderProducers = producers.map((producer) => {
		return <ProducerCard producer={producer} key={producer.id} />;
	});
	return (
		<Container>
			<Card.Group itemsPerRow='4'>{renderProducers}</Card.Group>
		</Container>
	);
};
export default ProducersList;
