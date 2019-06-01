import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import Markup from "preact-markup";
import style from "./style";
import SplitEditor,{hackMarkup} from "../../components/split-editor";

import defaultHtm from "./defaultHtm";

export default class Home extends Component {
		state = {
		editorCode: defaultHtm,
	};
	render() {
		let hackedMarkup = hackMarkup(this.state.editorCode);
		return (
			<div class={`page`}>
				<h1>Ui Simulator</h1>
				<p>Live-coding environment for the Zeit integration component catalog</p>
				<SplitEditor
					editorCode={this.state.editorCode}
					outputCode={hackedMarkup}
					onEditorChange={editorCode => this.setState({ editorCode })}
					onOutputChange={outputCode => this.setState({ outputCode })}
				/>
			</div>
		);
	}
}
