import React from "react"
import { Link } from "gatsby"

const Naviation = () => {
    return (
        <div id='nav' style={{display:'flex', alignSelf:'flex-end', color:'white', position: 'absolute', right:0}}>
            <div><Link to="/"> Home</Link></div>
            <div><Link to="/blog"> Blog </Link></div>
        </div>
    )
}

export default Naviation;