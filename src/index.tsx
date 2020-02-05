import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById('root') as HTMLElement);
registerServiceWorker();
