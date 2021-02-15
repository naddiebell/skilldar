import logo from './logo.svg';
import React, { useState, useEffect, useReducer } from 'react';
import AppContext from "./store/context";
import store from "./store";
import axios from 'axios';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home"
import ProjectCard from "./Components/ProjectCard/ProjectCard"

function App() {
  const [projectData, setData] = useState();
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  useEffect(async () => {
    const result = await axios(
      'https://my.api.mockaroo.com/skilldar.json?key=3a6cc520',
    );

    setData(result.projectData);
  }, [])

  console.log("data", projectData)

  return (
    <>
      <NavBar />
      <AppContext.Provider value={{ state, dispatch }}>
        <Home projectData={projectData} />
      </AppContext.Provider>
    </>
  );
}

export default App;
