import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function projectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, Difficulty, comment, featuredImg, Recipe } = data.markdownRemark.frontmatter
    
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{Difficulty}</h3>
                <h4>{comment}</h4>
                <div className={styles.featured}>            
                    <Img fluid={featuredImg.childImageSharp.fluid} /> 
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
                <h5>{Recipe}</h5>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                Difficulty
                title
                comment
                featuredImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`