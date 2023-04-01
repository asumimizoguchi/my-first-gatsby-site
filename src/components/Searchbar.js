import {Link} from 'gatsby'
import React from 'react'


export default function Searchbar(){
    return (
        <nav class = "search-bar">
            <div>
                <h2 class = "language">English</h2>
            </div>
            <div class = "search">                
                <input type="text" placeholder = "Search by keyword, ingredient, dish"></input>

            </div>
        </nav>
    )
}