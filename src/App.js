import './App.css';
import { v4 as uuidv4 } from 'uuid';

import Window from './Sensors/Window';
import { useState } from 'react';
import Water from './Sensors/Water';

function App() {

  const [authKey, setAuthKey] = useState(() => getInitialAuthKey)
  const [sensorData, setSensorData] = useState(() => getSensorData(authKey))

  function getInitialAuthKey(){
    fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/auth",
          {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: "123456",
              password: "password"
            })
          })
    .then(resp=> resp.text())
    .then(key=> {console.log(key);setAuthKey(key)})
  }

  function getSensorData(authKey){
    fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/get",
          {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: {authKey},
              
            })
          })
    .then(resp=> resp.text())
    .then(data=> {console.log(data);setAuthKey(data.token)})
  }

  

  return (
    <div className="App" onLoad={getInitialAuthKey}>
      <button onClick={getSensorData(authKey)}>Click me</button>
    </div>
  );
}

export default App;
