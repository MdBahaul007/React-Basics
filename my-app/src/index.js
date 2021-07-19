import React from 'react';
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import reactDom from 'react-dom';

// import App from './App';


// ReactDOM.render(
//     <div>
//         <h1>Hello</h1>
//         <p>How are you</p>
//     </div>,
//     document.getElementById("root"));

//above using another method

// ReactDOM.render(
//     [
//         <h1>Hello</h1>,
//         <p>How are you doing.</p> 

//     ],
// document.getElementById("root"));


//above using another method
// ReactDOM.render(
//     <React.Fragment>
//         <h1>Hello</h1>
//         <p>How are you....</p>
//     </React.Fragment>,
//     document.getElementById("root")
// )

//above using another method
// ReactDOM.render(
//     <>
//      <h1>Hello</h1>
//      <p>Top 5 Web Series.</p>
//      <ol>
//          <li>Games of Thrones </li>
//          <li>Money Heist</li>
//          <li>Prison Break</li>
//          <li>Special Ops</li>
//          <li>Family Man</li>
//      </ol>
//     </>,
//      document.getElementById("root")
// );

const name="mbm"
ReactDOM.render(
    <React.Fragment>
        <h1>My name is {name}</h1>
        <h1>{4*4}</h1>
    </React.Fragment>,
    document.getElementById("root")
);