import ReactDOM from "react-dom";
import App from "./App";

/* STYLES */
import './sass/app.scss';

function ReactRoot() {
    return <App />;
}

ReactDOM.render(<ReactRoot />, document.getElementById("root"));
