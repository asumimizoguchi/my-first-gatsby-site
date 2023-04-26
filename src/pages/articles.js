import { graphql, Link } from 'gatsby'
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/articles.module.css'
import Img from 'gatsby-image'

//This is article pages
export default function Articles({ data }){
    console.log(data)
    const articles = data.articles.nodes
    const contact = data.contact.siteMetadata.contact

    return (      

        <Layout>
        <div>
            <h1 className={styles.ars}>Articles</h1>
            <div className={styles.projects}>
                {articles.map(article => (
                    <Link to = {"/projects/" + article.frontmatter.slug} key={article.id}>
                        <div>
                            <h3>{ article.frontmatter.title }</h3>
                            <Img fluid={article.frontmatter.thumb.childImageSharp.fluid} /> 
                            <p>{ article.frontmatter.stack }</p>
                        </div>
                    </Link>
                ))}
            </div>
              
            <p>Tell us what you think at { contact } </p>
        </div>
        </Layout>
    )
}

// export page query
export const query = graphql`
query ArticlesPage {
    articles: allMarkdownRemark(sort: {frontmatter: {title: ASC}} filter: {fileAbsolutePath: {regex: "/(articles)/"}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`