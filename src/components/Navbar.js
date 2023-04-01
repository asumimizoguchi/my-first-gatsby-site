import {Link} from 'gatsby'
import React from 'react'

export default function Navbar(){
    return (
        <nav class = "navbar">
            
            <div class = "title">
                <h2 class = "umami">UMAMI</h2>
                <p class = "magazine">Food Magazine</p>
            </div>
            <div class = "links">
                
                <Link to = "/">Home</Link>
                <Link to = "/articles">Articles</Link>
                <Link to = "/recipes">Recipes</Link>
                

            </div>
        </nav>
        
    )
}