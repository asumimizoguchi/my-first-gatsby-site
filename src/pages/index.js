import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

// main page of recipe site
export default function Home({ data }) {
  console.log(data)
  return (
    
    <Layout>
      
      <section　className = {styles.header}>
        <div>
          <h1>Homepage</h1>
          <Link className={styles.btn} to="/projects">View recipe</Link>
        </div>
      </section>
      
    </Layout>
  )
}

export const query = graphql /*
  query SiteInfo {
    site {
      siteMetadata {
        description
        title 
      }
    }
  }
*/
