import React from "react"
import { Link } from "gatsby"

const Naviation = () => {
    return (
        <div>
            <div><Link to="/"> Home</Link></div>
            <div><Link to="/page-2"> Page 2 </Link></div>
        </div>
    )
}

export default Naviation;