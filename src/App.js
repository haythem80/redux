import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleMinus, handlePlus, handleShow } from './redux/actions';

function App() {
const {count,isShow}=useSelector(state=>state)

// console.log(count)
const dispatch=useDispatch()
    
  return (
    <div className="App">
    <button onClick={()=>dispatch(handleShow())} >Show</button>
    {
      isShow&&<>
      <h1>{count}</h1>
      
      <button onClick={()=>dispatch(handlePlus())} >+</button>
      <button onClick={()=>count>0&&dispatch(handleMinus())}>-</button>
    </>
  }
    </div>
  );
}

export default App;
