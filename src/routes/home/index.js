import { h, Component } from "preact";
import { route } from 'preact-router';

import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style";

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>Tools:</h1>
				<Card class={style.card}>
					<h2>Ui Simulator/Component playground</h2>
					<p>Live-coding environment for the Zeit integration component catalog</p>
					<Card.Actions>
						<Card.ActionButton onClick={() => route('/ui-simulator')}>
							Navigate to simulator
						</Card.ActionButton>
					</Card.Actions>
				</Card>
				<Card class={style.card}>
					<h2>Integration Server Tester</h2>
					<p>Make queries to an integration server with simulated visual output </p>
					<Card.Actions>
						<Card.ActionButton onClick={() => route('/integration-tester')}>
							Navigate to integration server tester
						</Card.ActionButton>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}
