import React from 'react'
import "./styles/Phone.css"
import { Link } from 'react-router-dom'

const Phone = () => {
  return (
    <section className="phone">
        <div className="cover-pic">
            <img className='phone-img' src="/image/phone-interface-glass-case.webp" alt="cover-pic" width="90%" />
        </div>
        <div className="write">
            <h1><b>Phone Cases</b></h1>
            <button><Link to="/model"><b>Choose Model</b></Link></button>
        </div>
        
        <div className="types">
            <h1><b>Over 100+ designs</b></h1>
            <h2><Link to="#">View All</Link></h2>
            <div className="containers" >
                <div className="box-container">
                  <div className="box">
                    <Link to="/camo"><img className="full-width" src="https://coveritup.com/cdn/shop/files/camo_gif.gif?v=1686288594&amp;width=600" alt="Image" width="585" height="255" /></Link>
                    <Link to="/camo"><h2>Camo</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/blackgold"><img src="https://coveritup.com/cdn/shop/files/black_and_gold_1.webp?v=1701371022&amp;width=600" width="585" height="255" /></Link>
                    <Link to="/blackgold"><h2>Black Gold</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/aura"><img src="https://coveritup.com/cdn/shop/files/gradient_gif_1.gif?v=1686660670&amp;width=600" width="585" height="255" /></Link>
                    <Link to="/aura"><h2>Aura</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/tie"><img src="https://coveritup.com/cdn/shop/files/tie_dye_gif.gif?v=1686288585&amp;width=600" width="585" height="255" /></Link>
                    <Link to="/tie"><h2>Tie & Dye</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="customised"><img src="https://coveritup.com/cdn/shop/files/Final_gif_1.gif?v=1687853855&amp;width=600" width="585" height="255" /></Link>
                    <Link to="customised"><h2>Customized</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/vibe"><img src="https://coveritup.com/cdn/shop/files/y2k_square_gif.gif?v=1685965193&amp;width=600" width="585" height="255" /></Link>
                    <Link to="/vibe"><h2>Vibe 2K</h2></Link>
                  </div>
                  <div className="box">
                    <Link to="/chandrayan"><img src="https://coveritup.com/cdn/shop/files/chandraayan.webp?v=1701366012&amp;width=600" width="585" height="255" /></Link>
                    <Link to="/chandrayan "><h2>Chandrayaan</h2></Link>
                  </div>
                </div>
              </div>
        </div>
    </section>
  )
}

export default Phone
