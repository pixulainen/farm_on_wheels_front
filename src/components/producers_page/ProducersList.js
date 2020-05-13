import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProducerCard from './ProducerCard';
export default function ProducersList({ match, producers }) {
	const renderProducers = producers.map((producer) => {
		return (
			<Link className="ui card" key={producer.id} to={`/producers/${producer.id}`}>
				{<ProducerCard producer={producer} key={producer.id} {...producer} />}
			</Link>
		);
	});
	return (
		<Container>
			<Card.Group itemsPerRow="4">{renderProducers}</Card.Group>
		</Container>
	);
}
