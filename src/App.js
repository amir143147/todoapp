import  { useState } from "react";
import './App.css';

function App() {
  let [value,setvalue] = useState();
  let [item,setitem] = useState([]);

  let additem=()=>{
    if(value===""){
      return item;
    }
    else {
      setitem([...item,value])
      setvalue("")
    }
    

  }

  let deletitem=(key)=>{
    let newitem=item.filter((val,index)=>{
    return key!==index
    })
    setitem([...newitem])
    // [...item];
    // newitem.splice(key,1)
    // setitem([...newitem])
    

  }
  return (
    <>
    <h1>To DO APP</h1>
    <div>
      <input 
      type="text" 
      placeholder="Enter Text"
      value = {value}
      onChange = {(e)=> setvalue(e.target.value) } />
      <button onClick={additem}>+</button>
    </div>
    <div>
    {
      item.map((v,i)=>{
        return (<>
        <span>{v}</span>
        <button onClick={()=>{
          deletitem(i)
        }}>-</button><br/>
        </> )})
      // item.map((v,i)=>{
      //  return <p key={i}>{v}</p>
      // })
    }
</div>
    </>
  );
}

export default App;
