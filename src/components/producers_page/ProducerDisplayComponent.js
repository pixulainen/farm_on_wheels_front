import React from 'react';
import { Image, Grid, Container, Header } from 'semantic-ui-react';
export default function ProducerDisplayComponent(props) {
	return (
		<div>
			<Container>
				<Grid container columns={2}>
					<Grid.Row>
						<Grid.Column>
							<Image src={props.producer.store_photos} size='large' rounded />
						</Grid.Column>

						<Grid.Column verticalAlign='middle' textAlign='center'>
							<Container>
								<Header>{props.producer.store_name}</Header>
								<Header>{props.producer.store_description}</Header>
								<Header>Location: {props.producer.store_location}</Header>
							</Container>
							<Grid.Column verticalAlign='bottom' />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}
