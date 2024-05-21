import React from 'react'
import './styles/Hoodies.css'
import { Link } from 'react-router-dom'
import Hoodie2 from './hoodie2'

const Hoodies = () => {
  return (
    <div className="types">
            <h1><b>Hoodies</b></h1>
            <div className='hii'>
            <img src="https://cdn.dribbble.com/users/2177056/screenshots/14731724/media/08c359ec2d915b9338b8e00bb57af04e.gif" alt="hoodie" /></div>
            <h2><a href="#">View All </a></h2>
            <div className="containers" >
                <div className="box-container">
                  <div className="box">
                    <Link to="/printed"><img src="//coveritup.com/cdn/shop/files/image_449.png?v=1687860624&amp;width=500" alt="" srcSet="//coveritup.com/cdn/shop/files/image_449.png?v=1687860624&amp;width=200 200w, //coveritup.com/cdn/shop/files/image_449.png?v=1687860624&amp;width=300 300w, //coveritup.com/cdn/shop/files/image_449.png?v=1687860624&amp;width=400 400w, //coveritup.com/cdn/shop/files/image_449.png?v=1687860624&amp;width=500 500w" width="580" height="255" loading="lazy" sizes="(max-width: 699px) 160px, 285px" className="zoom-image" /></Link>
                    <Link to="/printed"><h2>Printed</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/plain"><img src="//coveritup.com/cdn/shop/files/image_446.png?v=1687860459&amp;width=500" alt="" srcSet="//coveritup.com/cdn/shop/files/image_446.png?v=1687860459&amp;width=200 200w, //coveritup.com/cdn/shop/files/image_446.png?v=1687860459&amp;width=300 300w, //coveritup.com/cdn/shop/files/image_446.png?v=1687860459&amp;width=400 400w, //coveritup.com/cdn/shop/files/image_446.png?v=1687860459&amp;width=500 500w" width="585" height="255" loading="lazy" sizes="(max-width: 699px) 160px, 285px" className="zoom-image" /></Link>
                    <Link to="/plain"><h2>Plain Basics</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/customise"><img src="//coveritup.com/cdn/shop/files/image_448.png?v=1687860631&amp;width=500" alt="" srcSet="//coveritup.com/cdn/shop/files/image_448.png?v=1687860631&amp;width=200 200w, //coveritup.com/cdn/shop/files/image_448.png?v=1687860631&amp;width=300 300w, //coveritup.com/cdn/shop/files/image_448.png?v=1687860631&amp;width=400 400w, //coveritup.com/cdn/shop/files/image_448.png?v=1687860631&amp;width=500 500w" width="585" height="255" loading="lazy" sizes="(max-width: 699px) 160px, 285px" className="zoom-image" /></Link>
                    <Link to="/customise"><h2>Customised</h2></Link>
                  </div>
                  <div className="box">
                    <a href="/reflective"><img src="//coveritup.com/cdn/shop/files/image_447.png?v=1687860631&amp;width=500" alt="" srcSet="//coveritup.com/cdn/shop/files/image_447.png?v=1687860631&amp;width=200 200w, //coveritup.com/cdn/shop/files/image_447.png?v=1687860631&amp;width=300 300w, //coveritup.com/cdn/shop/files/image_447.png?v=1687860631&amp;width=400 400w, //coveritup.com/cdn/shop/files/image_447.png?v=1687860631&amp;width=500 500w" width="585" height="255" loading="lazy" sizes="(max-width: 699px) 160px, 285px" className="zoom-image" /></a>
                    <a href="/reflective"><h2>Reflective Print</h2></a>
                  </div>
                </div>
              </div>
              <Hoodie2 />
    </div>

    
        
  )
}

export default Hoodies

