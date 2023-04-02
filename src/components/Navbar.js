import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar(){
    const data = useStaticQuery(graphql`
        query SiteInfo{
            site {
                siteMetadata {
                    title 
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata

    return (
        <nav class = "navbar">
            
            <div class = "title">
                <h2 class = "umami">{ title }</h2>
                <p class = "magazine">Food Magazine</p>
            </div>
            <div class = "links">
                
                <Link to = "/">Home</Link>
                <Link to = "/articles">Articles</Link>
                <Link to = "/projects">Recipes</Link>
                

            </div>
        </nav>
        
    )
}