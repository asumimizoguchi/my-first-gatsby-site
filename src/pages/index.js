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
        <div><Img fluid={data.file.childImageSharp.fluid} /></div>
        <div>
          <h1>Super easy vegetarian pasta bake</h1>
          <p>
            A wholesome pasta bake is the ultimate comfort food. This delicious bake is super quick to prepare and an ideal midweek meal for all the family.
          </p>
          <Link className={styles.btn} to="/projects">View recipe</Link>
        </div>

      </section>
      
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "veggie-pasta-bake-hero.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`