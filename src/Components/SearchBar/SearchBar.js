import React, { useState, useContext } from 'react';
import AppContext from "../../store/context";
import "./SearchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    const { dispatch } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleKeyDown = (search) => {
        if ( searchTerm === "") {
            return
        } else {
            console.log(search, "search")
            dispatch({ type: "setSearchTerm", data: search })
        }
    }
  
    return (
        <div className="search">
        <input
          className="searchbox"
          type="text"
          placeholder="&#xF002; Search creative projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" && handleKeyDown(searchTerm)
          }
        />
        
      </div>
    )
}


