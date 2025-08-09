

import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[fields,setField]=useState([{name:"", age:""}]);

  const handleChange=(index,event)=>{
    const{name,value}=event.target;
    const updatedSetField=[...fields];
    updatedSetField[index][name]=value;
    setField(updatedSetField);

  }

  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(fields);
  }
  const handleAdd=(e)=>{
    e.preventDefault()
    setField([...fields, {name: "" , age: ""}]);
  }
  const handleRemove=(e,index)=>{
    e.preventDefault();
    const updatedfields=fields.filter((_,i)=>index!=i)
    setField(updatedfields)

  }
  return (
    <div>
       <form>
        {fields.map((field,index)=>(
        <div key={index}>
        <input type="text" name="name" placeholder="Name" value={field.name}onChange={(e)=>{handleChange(index,e)}}/>
        <input type="number" name="age" placeholder="Age" value={field.age} onChange={(e)=>{handleChange(index,e)}}/>
        <button onClick={(e)=>{
          handleRemove(e,index);
        }}>Remove</button>
        </div>
        
        ))}
        <button onClick={handleAdd}>Add More...</button>
        <button onClick={handleSubmit}>Submit</button>

       </form>
    </div>
  )
}

export default App
