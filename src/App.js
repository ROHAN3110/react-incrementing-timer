import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[timer,settimer]=useState(0);
  
  useEffect(()=>{
    let id=setInterval(() => {
      if(timer>10){
        clearInterval(id)
      }else{
        settimer(timer+1);
      }
    }, 1000);
    return()=>{
      clearInterval(id);
    }
  },[timer])
  return (
   <div>
      Count Up:{timer}
    </div>
  );
}

export default App;
