import { h, Component } from "preact";
import Card from "preact-material-components/Card";
import LinearProgress from "preact-material-components/LinearProgress";
import "preact-material-components/LinearProgress/style.css";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import Markup from "preact-markup";
import style from "./style";
import SplitEditor, { hackMarkup } from "../../components/split-editor";
const defaultQueryCode = `
{
    "query": {
        "cfgId": "icfg_****"
    },
    "action": "view",
    "clientState": {},
    "token": "****",
    "slug": "sandbox",
    "configurationId": "icfg_****",
    "integrationId": "oac_****",
    "teamId": null, 
    "user": {
        "id": "****",
        "username": "****",
        "email": "****",
        "name": null,
        "profiles": []
    },
    "team": null,
    "project": null,
    "projectId": null,
    "installationUrl": "https://zeit.co/dashboard/integrations/icfg_****"
}
`;

export default class Home extends Component {
  state = {
    editorCode: defaultQueryCode,
    outputCode: "No server response <B> yet</B>",
    loading: false,
    serverUrl:"http://localhost:5005"
  };
  sendRequest() {
    let url = this.state.serverUrl;
    // console.log(this.state.editorCode)
    let data = this.state.editorCode.trim();
    console.log("Sending Request to", url, data,this.state.editorCode);
    this.setState({ loading: true });

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode:"cors",
      body: data
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        console.log(data)
        this.setState({ outputCode: data });
        this.setState({ loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        this.setState({ outputCode: `Request error ${error}` });
        // console.log(error);
      });
  }
  render() {
    let hackedMarkup = hackMarkup(this.state.outputCode);
    return (
      <div class={`page`}>
        <h1>Integration Server Tester</h1>
        <p>Make queries to an integration server with simulated visual output </p>
        <input onChange={(ev) => this.setState({serverUrl:ev.target.value})} value={this.state.serverUrl} />
        <button onClick={this.sendRequest.bind(this)}>Send Request</button>
        {this.state.loading ? <LinearProgress indeterminate={true} /> : ""}

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
