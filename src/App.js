import React, { Component } from 'react';

class App extends Component {
render() 
  {
    const  change = (res)=>{ 
      document.getElementById("res").innerHTML=res
      document.getElementById("resu").innerHTML=res*res;
     
     
    }
    
return (
      <div className="app">
      
      
      <button onClick={()=>change('0')}>0</button>
      <button onClick={()=>change('1')}>1</button>
      <button onClick={()=>change('2')}>2</button>
      <button onClick={()=>change('3')}>3</button>
      <button onClick={()=>change('4')}>4</button>
      <button onClick={()=>change('5')}>5</button>
      <button onClick={()=>change('6')}>6</button>
      <button onClick={()=>change('7')}>7</button>
      <button onClick={()=>change('8')}>8</button>
      <button onClick={()=>change('9')}>9</button>
     
<div>
<h1>the factorial of <spam id="res"> </spam>is:</h1>
 <h1 id="resu"></h1>
 
 
 </div>
 </div>
    );
  }
}

export default App;