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
            <h1 className={styles.ars}>articles</h1>
            <div>
                {articles.map(article => (
                    <Link to = {"/articles/" + article.frontmatter.slug} key={article.id}>
                        <div>
                            {/* <Img fluid={article.frontmatter.thumb1.childImageSharp.fluid} /> */}
                            <h3>{ article.frontmatter.title }</h3>
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
query ArticlePage {
    articles: allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb1 {
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