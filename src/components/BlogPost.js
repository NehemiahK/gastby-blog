import React from 'react'
import Layout from './layout';

const BlogPost = ({pageContext}) => {
    return(
        <Layout>
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
        </Layout>
    )
}

export default BlogPost
