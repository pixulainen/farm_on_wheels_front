import React, { Component } from 'react';
import API from '../../API';
import ProducerList from './ProducersList';
import ProducerStore from './ProducerDetails';
import { Segment } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
export default class ProducersPageComponent extends Component {
	state = {
		producers: []
	};

	componentDidMount() {
		return API.fetchProducers().then((producers) =>
			this.setState({
				producers
			})
		);
	}

	render() {
		return (
			<Segment basic>
				<Switch>
					<Route path="/producers" component={() => <ProducerList producers={this.state.producers} />} />
					<Route path="/producers/:producerId" component={ProducerStore} />>
				</Switch>
			</Segment>
		);
	}
}
