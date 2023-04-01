import React from "react"
import Layout from "../../components/Layout"
import Searchbar from "../../components/Searchbar"
import * as styles from '../../styles/recipes.module.css'

//This is Recipes pages
export default function Recipes(){
    return (
        
        <Layout>
        <div className={styles.recipe}>
            <h1>Recipes page</h1>
        </div>
        </Layout>
        
    )
}