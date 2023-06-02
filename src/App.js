import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Window from './Sensors/Window';
import { useState } from 'react';
import Water from './Sensors/Water';

function App() {

  const [authKey, setAuthKey] = useState(0)
  getInitialAuthKey()
  const [sensorData, setSensorData] = useState(() => getSensorData(authKey))

  function getInitialAuthKey(){
    let authKey
    
  }

  function getSensorData(authKey){
    // if (authKey == 0){
    //   fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/auth",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Accept": "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       username: "123456",
    //       password: "password"
    //     })
    //   })
    //   .then(resp=> resp.text())
    //   .then(key=> {
    //     let token = JSON.parse(key)["token"]
    //     console.log(token)
    //     fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/get",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Accept": "application/json",
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //           token: {token},
    //         })
    //       })
    //     .then(resp=> resp)
    //     .then(data=> console.log(data))
        
    //   })
  }
    fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/get",
          {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: "SHZLMKJNMT",
            })
          })
        .then(resp=> resp)
        .then(data=> console.log(data))
    
  

  function refreshSensorData(){
    setSensorData(getSensorData(authKey))
    return sensorData
  }

  

  return (
    <div className="App">
      <button onClick={refreshSensorData}>Click me</button>
    </div>
  );
}

export default App;
