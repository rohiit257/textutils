import React, { useState,useEffect } from 'react'
import Navcompo from './navbar/nav'
import TextForm from './TextForm/TextForm'
import Alerts from './Alerts/Alerts'





function App() {
  const [alert, setalert] = useState(null)

  const Showalert=(message,type)=>{

    setalert({
        msg:message,
        variant:type
    })

    setInterval(() => {
      setalert(null)
    }, 5000);


    // useEffect to trigger the alert when the component mounts
    
}

useEffect(() => {
  // Show an alert message when the app is loaded
  Showalert('Welcome to TextUtils!', 'info');
}, []); // The empty dependency array ensures that this effect runs only once on mount


  
  return (
    <>

      <Navcompo title="TextUtils"/>
      <Alerts alert={alert}/>
      <div className="container my-3">
        <h4>Analyze Text</h4>
      <TextForm Showalert={Showalert}/>

      </div>
      
       

    </>
    
  )
}

export default App
