import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default class ProducerCard extends Component {
	render() {
		const { store_name, store_photos, store_location, store_description, email, phone_number } = this.props;
		return (
			<Card color="olive">
				<Image src={store_photos} wrapped ui={true} />
				<Card.Content>
					<Card.Header>{store_name}</Card.Header>
					<Card.Meta>
						<span className="date">Location: {store_location}</span>
					</Card.Meta>
					<Card.Description>{store_description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Icon name="mail" />
					{email}
				</Card.Content>
				<Card.Content extra>
					<Icon name="phone" />
					{phone_number}
				</Card.Content>
			</Card>
		);
	}
}
