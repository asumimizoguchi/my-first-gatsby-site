import {Link} from 'gatsby'
import React from 'react'


export default function Searchbar(){
    return (
        <nav class = "searchComponent">
            <div class = "searchDiv">
                <h2 class = "language">English</h2>
                <input class = "searchBar" type="text" placeholder = "Search by keyword, ingredient, dish"></input>
                <h2 class = "login">Log in</h2>
            </div>
                                      
        </nav>
    )
}