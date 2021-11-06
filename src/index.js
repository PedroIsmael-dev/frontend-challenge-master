import ReactDOM from "react-dom";
import App from "./App";

/* STYLES */
import './sass/app.scss';

const loader = document.querySelector('.loader');

const hideLoader = () => loader.classList.add('loader--hide');

const ReactRoot = ({ hideLoader }) => {
    useEffect(() => {
        hideLoader()
    }, []);
    
    return <App/>; 
}

// SIMULATE RENDER
setTimeout(() => 
    ReactDOM.render(<ReactRoot hideLoader={hideLoader}/>, document.getElementById('root'))
, 1000);