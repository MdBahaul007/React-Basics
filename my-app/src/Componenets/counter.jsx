import React, { Component } from 'react';
class Counter extends Component {
    state = {
        // count: 0,
        count: this.props.value,
        //count will be 4 which is coming from counters.jsx
        // imageUrl:"https://picsum.photos/200"
        tags: ["tag1", "tag2", "tag3"]
    }
    // styles ={
    //     fontWeight:"bold",
    //     backgroundColor:"lightgreen",
    //     fontSize:20


    // };
    renderTag() {
        if (this.state.tags.length === 0) return <p>"There are no array elements"</p>

        //else condn
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

    }
    //if we ned to acces this keyword inside the increment Counter function 
    //we can use constructor and bind this keyword to the incrementCounter() fn
    //secondly we can convert incrementCounter() fn to aerrow fn and this way is preferred.
    incrementCounter = (id) =>  {
        console.log(id);
        console.log("Counter Incremented",this);

        //to incremet the counter when we click
        this.setState({count:this.state.count+1});
        // here this count will override the count in the state obj, this.state.count+1 it will get current count incremet it and set that value to count.

        //setState fn tells react that we are updating the states.

    }
   

    render() {
        console.log("Props",this.props);

        // let classes = this.getBadgeClass();
        return (
            <React.Fragment>
                {this.props.children}
                {/* <img src={this.state.imageUrl} alt=""></img> */}


                {/* <span  style={{fontFamily:'cursive',backgroundColor:'lightgreen',fontWeight:'bold'}} className="m-5">{this.formatCount()}</span>
            <button className="btn btn-primary btn-sm">Increment</button> */}


                <span className={this.getBadgeClass} className="m-5">{this.formatCount()}</span>
                {/* <button onClick={this.incrementCounter} className="btn btn-primary btn-sm">Increment</button> */}
                 {/* incrementCounter we are not using ()  after incrementCounter bcz we are not calling the fn burt we are just passing the refrence */}

                {/* above thing we can also write like */}
                <button onClick={()=>this.incrementCounter()} className="btn btn-primary btn-sm">Increment</button>

               
                {this.renderTag()}


            </React.Fragment>
        );
    }
    // getBadgeClass() {
    //     let classes = "m-5";
    //     classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    //     return classes;
    // }

    formatCount() {
        // return this.state.count ==='0' ? "Zero" : this.state.count;
        //above same can written as to reduce code write ability
        const { count } = this.state
        //if count is 0 then zero will be written else number will be written
        return count === 0 ? "Zero" : count;



    }
}

export default Counter;