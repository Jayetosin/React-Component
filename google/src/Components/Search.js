import React from "react";
import "../style/google-app.css"
import FontAwesomeIcon from './font';
import { useState } from 'react'

 function Search(){
    const [newSearch, setnewSearch] = useState("");

    const addChange = (event) => {
        const addSearch =event.target.value 
        console.log(addSearch);
        setnewSearch(addSearch);
    }

    const addClick = () => {
        console.log(`The new task is${newSearch}`)
        addClick(newSearch) 
        setnewSearch("");
    }
  return (
    <div className= "newSearch">
      <input type="search" placeholder="Search google or type a URL" class="search"  onChange={addChange}  value ={newSearch} />
         <button className='push' onClick={addClick}>{FontAwesomeIcon}</button>
       
    </div>
  )
}
export default Search

