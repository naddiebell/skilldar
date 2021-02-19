import React, { useState, useEffect, useReducer } from 'react';
import AppContext from "./store/context";
import store from "./store";
import axios from 'axios';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home"
import SearchBar from "./Components/SearchBar/SearchBar"
import Header from "./Components/Header/Header"

function App() {
  const [data, setData] = useState();
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  useEffect( () => {
    async function fetchData() {
      const result = await axios(
        'https://my.api.mockaroo.com/skilldar.json?key=3a6cc520',
      );
  
      setData(result.data);

    }
    fetchData()
  }, [])

  return (
    <>
      <NavBar />
      <Header />
      <AppContext.Provider value={{ state, dispatch }}>
        <SearchBar />
        <Home projectData={data} />        
      </AppContext.Provider>
    </>
  );
}

export default App;
