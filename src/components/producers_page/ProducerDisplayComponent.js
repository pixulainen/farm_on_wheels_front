import React from 'react';
import { Image, Grid, Segment, Container } from 'semantic-ui-react';

export default function ProducerDisplayComponent(props) {
	return (
		<div>
			<Segment placeholder>
				<Grid columns={2} stackable textAlign="center">
					<Grid.Row verticalAlign="middle">
						<Grid.Column>
							<Image src={props.producer.store_photos} size="large" rounded />
						</Grid.Column>

						<Grid.Column>
							<Container>
								<h1>{props.producer.store_name}</h1>
								<h1>{props.producer.store_description}</h1>
								<h1>Location: {props.producer.store_location}</h1>
							</Container>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</div>
	);
}
