import React from 'react';
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Componenets/counter';
import Counters from './Componenets/counters';
// import App from './App';



ReactDOM.render(<Counter />,document.getElementById("root"));
ReactDOM.render(<Counters />,document.getElementById("root"));