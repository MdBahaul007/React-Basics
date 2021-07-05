import React, { Component } from 'react';
import Counter from './counter';
class counters extends Component {
    state = {  
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    }
    render() { 
        return ( 
            <div>
                {/* <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
                {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}>
                    {/* <h4>This is title</h4> */}
                    {/* to render this go in counter.jsx now props will also have children property which is h4*/}
                    {/* to make it dynamic */}
                    <h4>Counter #{counter.id}</h4>

                </Counter>)}
        

            </div>
         );
    }
}
 
export default counters;