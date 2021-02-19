import React, { useState, useContext } from 'react';
import AppContext from "../../store/context";
import "./SearchBar.css";

export default function SearchBar() {
    const { dispatch } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleKeyDown = (search) => {
        if ( searchTerm === undefined) {
            return
        } else {
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


