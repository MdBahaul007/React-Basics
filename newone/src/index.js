/* eslint-disable array-callback-return */
import { logDOM } from '@testing-library/react';
import React from 'react';
import reactDom from 'react-dom';
import Card from './Webseries/Card';
import SeriesData from './Webseries/SeriesData';



// ReactDOM.render(<App/>,document.getElementById("root"));
// reactDom.render(
//     <>
//     <Card imgsrc="https://images.unsplash.com/photo-1617217139408-a7edcce70e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" source="Netflix original" showName="Money Heist" link="https://www.netflix.com/in/title/80192098"/>

//     <Card imgsrc="https://images.unsplash.com/photo-1613050920698-11821489ede4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpc29uJTIwYnJlYWslMjBzZXJpZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" source="Amazon" showName="Money Heist" link="https://www.google.com"/>

    

//     </>,


// document.getElementById("root"));


// above using array
// reactDom.render(
//     <>
//     <Card imgsrc={SeriesData[0].imgsrc}
//      source={SeriesData[0].source}
//      showName={SeriesData[0].showName}
//      link={SeriesData[0].link}/>

//     <Card imgsrc={SeriesData[1].imgsrc}
//      source={SeriesData[1].source}
//      showName={SeriesData[1].showName}
//      link={SeriesData[1].link}/>
//     </>,
// document.getElementById("root")
// );



//mkaing it more simpler using map
//  function cardValue(val){
//      return (
//         <Card imgsrc={val.imgsrc}
//      source={val.source}
//      showName={val.showName}
//      link={val.link}/>
//      );
//  }


// reactDom.render(
//     <>
    
//     <h1>Top Webseries</h1>
//     {/* passing function inside another function */}
//     {SeriesData.map(cardValue)}


    
//     </>,
//     document.getElementById("root")
// );


//above using the fat arrow function

reactDom.render(
        <>
        
        <h1>Top Webseries</h1>
        {/* passing function inside another function */}
        {SeriesData.map((val,index)=> {
            console.log(index);
            return (
             <Card  imgsrc={val.imgsrc}
                    source={val.source}
                    showName={val.showName}
                    link={val.link}/>
             );
        
        })}
    
    
        
        </>,
        document.getElementById("root")
    );
    
    