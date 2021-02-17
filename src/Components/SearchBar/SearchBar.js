import React, { useState, useContext } from 'react'
import AppContext from "../../store/context";

export default function SearchBar() {
    const { state, dispatch } = useContext(AppContext);
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
        <div className="Search">
        <input
          className="Searchbox"
          type="text"
          placeholder="Search creative projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) =>
            event.key === "Enter" && handleKeyDown(searchTerm)
          }
        />
        
      </div>
    )
}
