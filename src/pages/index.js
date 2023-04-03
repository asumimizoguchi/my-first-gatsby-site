import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

// main page of recipe site
export default function Home({ data }) {
  console.log(data)

  return (
    
    <Layout>
      
      <section className = {styles.header}>
        <div>
          <h1>Homepage</h1>
          <Link className={styles.btn} to="/projects">View recipe</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
      
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "quiche.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`