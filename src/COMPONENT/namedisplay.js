import React, { useEffect } from 'react'
import { useState } from 'react';
import './namedisplay.css';
function NameDis() {
  const [email,setEmail] = useState("")
  useEffect(()=>{setEmail(localStorage.getItem('email'))},[])
  var x = localStorage.getItem("loggedIn");
  if(x==="true"){
  
    // setfname(email);
    console.log(email);
  }
  
  
  return (
    <>
    <p>Hi   {email}</p>
    </>
  );

  }
export default NameDis;