import { graphql, Link } from 'gatsby'
import React from "react"
import Layout from "../../components/Layout"
import Searchbar from "../../components/Searchbar"
import * as styles from '../../styles/projects.module.css'
import Img from 'gatsby-image'

//This is Recipes pages
export default function Projects({ data }){
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        
        <Layout>
        <div className={styles.brownieImg}><Img fluid={data.file.childImageSharp.fluid} /></div>
      
        <div className={styles.recipe}>
            <h1>Recipes</h1>
            <div className={styles.projects}>
                {projects.map(project => (
                    <Link to = {"/projects/" + project.frontmatter.slug} key={project.id}>
                        <div>
                            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                            <h3>{ project.frontmatter.title }</h3>
                            <p>{ project.frontmatter.stack }</p>
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
query ProjectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          Difficulty
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

    file(relativePath: {eq: "vegan-brownies-hero.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }


  }
`