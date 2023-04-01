import React from 'react'
import Navbar from './Navbar'
import Searchbar from './Searchbar'
import '../styles/global.css'

export default function Layout({children}){
    return (
        <div class = "layout">
            <Searchbar/>
            <Navbar/>
            <div class ="content">
                {children}
            </div>
            <footer>
                <div>
                    <p>Umami Magazine & Umami Publications is a fictional magazine and publisher for illustrative purposes only.</p>
                </div>
                <div>
                    <p>© 2022 Terms & Conditions</p>
                </div>
            </footer>
        </div>
    )
}