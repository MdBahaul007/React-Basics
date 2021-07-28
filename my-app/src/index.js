/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
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


// const name="mbm"
// ReactDOM.render(
//     <React.Fragment>
//         <h1>My name is {name}</h1>
//         <h1>{4*4}</h1>
//     </React.Fragment>,
//     document.getElementById("root")
// );


//use of template litrals
// const fName="Mohd"
// const lName="bahaul"
// ReactDOM.render(
//     <>
//     <h1>{`my first name is ${fName} and last name is ${lName}`}</h1>
//     </>,
//     document.getElementById("root")
// );

// const fName="Mohd"
// const lName="bahaul"
// const date=new Date().toLocaleDateString()
// const time =new Date().toLocaleTimeString()
// const imageURL="https://picsum.photos/200/300";
// const link="//www.google.com"
// ReactDOM.render(
//     <>
//     <h1>{`My first name is ${fName} and Last name is ${lName}`}</h1>
//     <p>{`Current date is ${date}`}</p>
//     <p>{`Current time is ${time}`}</p>
//     <h1 contentEditable="true">Hello type anything!!</h1>

//     <a href={link} target="_blank" >
//         <img src={imageURL}  alt="random-image"/>
//     </a>
//     </>,
//     document.getElementById("root")
// );



//adding the CSS in the page

import './index.css';
const imageURL="https://picsum.photos/200/300";
const link="//www.google.com"
//PASSING INTERNAL CSS ALSO
const headingStyle={
    color:"red",
    textAlign:"center"
}
reactDom.render(
    <>
        <h1 className="heading">My name is MBM</h1>
        <div className="images">
            <a href={link} target="_blank">
            <img src={imageURL} alt="random image"/>
            <img src={imageURL} alt="random image"/>
            <img src={imageURL} alt="random image"/>
            </a>
        </div>
        <h1 style={headingStyle}>Mohd Bahaul Mustafa</h1>
    </>,
    document.getElementById("root")
);