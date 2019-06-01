import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import UiSimulator from '../routes/ui-simulator';
import IntegrationTester from '../routes/integration-tester';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<UiSimulator path="/ui-simulator" />
					<IntegrationTester path="/integration-tester/" />
				
					<NotFound default />
				</Router>
			</div>
		);
	}
}
