import React from 'react'
import "./styles/Trending.css"
import { Link } from 'react-router-dom'
const Trending = () => {
  return (
    <div>
      <div className="Trending">
        <h1 className='trending-h1'><b>Now Trending</b></h1>
        <Link to="/hoodies"><button><b>Shop Now</b></button></Link>
    </div>
    <img className='trending-img' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b422d0107510929.5fa91fd6b7341.gif" alt="hoodie" />
    </div>
  )
}

export default Trending
