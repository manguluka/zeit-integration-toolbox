import { h, Component } from "preact";
import style from "./style";
import Markup from 'preact-markup'
import * as CatalogComponents from "../zeit-catalog";
export const hackMarkup = markup => {
	let hackedMarkup = markup;
	hackedMarkup = hackedMarkup.replace(RegExp('{"', "gi"), "");
	hackedMarkup = hackedMarkup.replace(RegExp('"}', "gi"), "");
	return hackedMarkup;
};


class CodeEditor extends Component {
	onChange(ev) {
		let val = ev.target.value

		this.props.onChange(val);
	}
	render() {
		return (
			<div class={style.codeEditor}>
				<textarea onInput={this.onChange.bind(this)}>
					{this.props.code}
				</textarea>
			</div>
		);
	}
}

export default class SplitEditor extends Component {
	onEditorChange(val) {
			
		this.props.onEditorChange(val);
	}
	render() {
		return (
			<div class={style.splitEditor}>
				<div class={style.splitHalf}>
					<CodeEditor
						code={this.props.editorCode}
						onChange={this.onEditorChange.bind(this)}
					/>
				</div>
				<div class={style.splitHalf}>
					<Markup
						markup={this.props.outputCode}
						components={CatalogComponents}
					/>
				</div>
			</div>
		);
	}
}