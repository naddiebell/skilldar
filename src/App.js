import React, { useState, useEffect, useReducer } from 'react';
import AppContext from "./store/context";
import store from "./store";
import axios from 'axios';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home"
import SearchBar from "./Components/SearchBar/SearchBar"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"

function App() {
  const [data, setData] = useState();
  const [state, dispatch] = useReducer(store.reducer, store.initialState);

  useEffect(() => {
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
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="homePage">
          <Header />
          <SearchBar className="searchBar" />
          <Home projectData={data} />
        </div>
      </AppContext.Provider>
      <Footer />
      
    </>
  );
}

export default App;
