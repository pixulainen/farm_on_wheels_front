import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProducerCard = ({ producer }) => {
	const { store_name, store_photos, store_description, id } = producer;
	const shorten = (text, maxLength) => {
		if (text && text.length > maxLength) {
			return text.substr(0, maxLength) + '...';
		}
		return text;
	};
	return (
		<Card centered raised color='olive' style={{ height: 425, width: 350 }}>
			<Image src={store_photos} style={{ height: 200, objectFit: 'cover' }} />
			<Card.Content textAlign='center'>
				<Card.Header as={Link} to={`/producers/${id}`} style={{ fontSize: '20px' }}>
					{store_name}
				</Card.Header>
				<Card.Description style={{ fontSize: 'medium', marginTop: 25 }}>
					{shorten(store_description, 320)}
				</Card.Description>
			</Card.Content>
		</Card>
	);
};
export default ProducerCard;
