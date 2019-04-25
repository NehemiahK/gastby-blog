import React from 'react'
import { Link } from 'gatsby'

const BlogSummary = (props) => {
    return(
    <div >
    <h3>{props.title}</h3>
    <div dangerouslySetInnerHTML={{__html:props.content}}/>
    <small>Posted by {props.author }on {props.postDate}</small>
    <Link to={props.path}>Read More</Link>
    <hr/>
</div>)
}

export default BlogSummary