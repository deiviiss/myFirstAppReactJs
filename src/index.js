import React from 'react'; // biblioteca de React (permite crear interfaces)
import ReactDOM from 'react-dom'; // Permite crear interfaces para el navegador
import './index.css'; //importa el CSS
import App from './App'; //

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root')); // Pinta un componente indicado por getElement y pasamos el id donde lo pintamos