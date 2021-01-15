import React from "react";
import './App.css';
import './Room.css';

  function Room() {
    const [isLit , setLit] = React.useState(true);
    let [temp , settemp] = React.useState(10);
    return(
    <center>
      <div className={`room ${isLit? "lit": "dark"}`}>       
      This room is {isLit ? 'lit' : 'dark'}
      <br></br>
      <button onClick= {() => setLit(true)}> [[On]] </button>
      <hr></hr>
      <button onClick= {() => setLit(false)} >[[Off]]</button>
      <hr></hr>
      <hr></hr>
      Current Temperature is {temp} *C
      <br></br>
      <button onClick={() => settemp(++temp)}>UP+</button> &nbsp;&nbsp;
      <button onClick={() => settemp(--temp)}>DOWN-</button>
      </div>
      
      </center>
    );
  }

export default Room;
