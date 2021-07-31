import React from 'react';

function add(a,b){
    return a+b;
    
}

function sub(a,b){
    return (a-b);
}
function multi(a,b){
    return (a*b);
}
function div(a,b){
    let divi=a/b;
    return divi.toFixed(2);
}

export {add,sub,multi,div};