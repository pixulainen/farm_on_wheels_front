import React from 'react';
import { Image, Grid, Segment, Container, Button, Icon, Label } from 'semantic-ui-react';
import API from '../../API';
export default function ProducerDisplayComponent(props) {
	return (
		<div>
			<Segment vertical>
				<Grid columns={3} stackable textAlign="center">
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
							<Grid.Column verticalAlign="bottom" />
							<Button
								onClick={() => API.addToFavourites(props.producer.id)}
								basic
								circular
								animated="vertical"
								floated="right"
								color="olive"
							>
								<Button.Content hidden>Save</Button.Content>
								<Button.Content visible>
									<Icon name="heart outline" />
								</Button.Content>
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		</div>
	);
}
