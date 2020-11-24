import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ProducerCard = ({ producer }) => {
	const { store_name, store_photos, store_location, store_description, email, phone_number, id } = producer;
	return (
		<Card centered raised color='olive' style={{ height: 550 }}>
			<Image src={store_photos} wrapped ui={true} style={{ objectFit: 'cover' }} />
			<Card.Content>
				<Card.Header as={Link} to={`/producers/${id}`}>
					{store_name}
				</Card.Header>
				<Card.Meta>
					<span className='date'>Location: {store_location}</span>
				</Card.Meta>
				<Card.Description>{store_description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Icon name='mail' />
				{email}
			</Card.Content>
			<Card.Content extra>
				<Icon name='phone' />
				{phone_number}
			</Card.Content>
		</Card>
	);
};
export default ProducerCard;
