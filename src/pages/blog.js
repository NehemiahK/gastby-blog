import React from 'react'
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import BlogSummary from '../components/BlogSummary';

const BlogPage = ({data}) => {
    return (
        
            <Layout>
            <h1>Lastest Posts</h1>
            {data.allMarkdownRemark.edges.map(post => (
              <BlogSummary key={post.node.id} title={post.node.frontmatter.title} 
              author={post.node.frontmatter.author} postDate={post.node.frontmatter.date}
              path={post.node.frontmatter.path} content={post.node.html}/>
            ))}
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark{
            edges{
              node{
                id
                html
                frontmatter{
                  path
                  title
                  date
                  author
                }
              }
            }
          }
        }  
`

export default BlogPage