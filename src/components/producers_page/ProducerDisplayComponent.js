import React from 'react';
import { Image, Grid, Container, Header } from 'semantic-ui-react';
export default function ProducerDisplayComponent(props) {
	return (
		<Container>
			<Grid container columns={2}>
				<Grid.Row>
					<Grid.Column verticalAlign='middle'>
						<Image src={props.producer.store_photos} alt={props.producer.store_name} />
					</Grid.Column>

					<Grid.Column verticalAlign='middle' textAlign='center'>
						<Container>
							<Header>{props.producer.store_name}</Header>
							<Header>{props.producer.store_description}</Header>
						</Container>
						<Grid.Column verticalAlign='bottom' />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}
