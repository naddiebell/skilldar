import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home"

function App() {
  const [data, setData] = useState();

  useEffect(async () => {
    const result = await axios(
      'https://my.api.mockaroo.com/skilldar.json?key=3a6cc520',
    );

    setData(result.data);
  }, [])

  console.log("data", data)

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
