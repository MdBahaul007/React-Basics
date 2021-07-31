import React from 'react';
import {add,sub,multi,div} from './Components/Calcuate';


function App(){
    return (
    <>
        <ul>
            <li>{add(4,8)}</li>
            <li>{sub(8,9)}</li>
            <li>{multi(8,8)}</li>
            <li>{div(8,3)}</li>
        </ul>

  </>

    );
}
export default App;